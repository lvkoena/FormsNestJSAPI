import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormDto } from 'src/form/dto/create-form.dto';
import { Form } from 'src/form/entity/form.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class FormService {
  private transporter;

  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {
    this.transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: 'noreply@49cherry.co.za',
        pass: 'JulyCherry2024&',
      },
    });
  }

  async saveFormData(createFormDto: CreateFormDto): Promise<Form> {
    const newForm = this.formRepository.create(createFormDto);
    return this.formRepository.save(newForm);
  }

  async sendMail(to: string, subject: string, text: string, html: string) {
    const mailOptions = {
      from: 'noreply@49cherry.co.za',
      to,
      subject,
      text,
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email!', error);
      throw error;
    }
  }
}

