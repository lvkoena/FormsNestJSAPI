import { Injectable } from '@nestjs/common';
import { CreateFormDto } from 'src/form/dto/create-form.dto';


@Injectable()
export class FormService {
  private readonly form: CreateFormDto[] = [];

  submitFormData(createFormDto: CreateFormDto) {
    this.form.push(createFormDto);
    console.log('Form data received:', createFormDto); 
    return 'Form submitted successfully!';
  }

  getFormInfo() {
    return this.form;
  }
}
