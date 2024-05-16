import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateFormDto } from 'src/form/dto/create-form.dto';
import { FormService } from 'src/form/services/form/form.service';


@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  submitForm(@Body() createFormDto: CreateFormDto) {
    return this.formService.submitFormData(createFormDto);
  }

  @Get()
  getFormData() {
    return this.formService.getFormInfo();
  }
}
