import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateFormDto } from 'src/form/dto/create-form.dto';
import { FormService } from 'src/form/services/form/form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async sendContactMessage(@Body() createFormDto: CreateFormDto) {

    const { firstName, lastName, emailAddress, phoneNumber, message } = createFormDto;
    // console.log('Received request to send contact message:', createFormDto);
  
    if (!firstName) {
      throw new BadRequestException('First Name cannot be null.');
    }

    if(!lastName) {
      throw new BadRequestException('Last Name cannot be null.');
    }

    if(!emailAddress) {
      throw new BadRequestException('Email Address cannot be null.');
    }

    if(!phoneNumber) {
      throw new BadRequestException('Phone Number cannot be null.');
    }

    if(!message) {
      throw new BadRequestException('Message cannot be null.');
    }

    const subject = `New mail from ${firstName} ${lastName}`;
    const text = message;
    const html = `<p>${message}</p><p>${emailAddress}</p><p>${phoneNumber}</p>`;
    console.log('Attributes are correctly placed');

    try {
      // Save form data to the database
      await this.formService.saveFormData(createFormDto);
      console.log('Form data saved successfully.');

      // Send email
      await this.formService.sendMail('noreply@49cherry.co.za', subject, text, html);
      console.log('Email sent successfully! ')

      return { message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Error processing request:', error);
      throw new BadRequestException('Failed to process the request.');
    }
  }
}
