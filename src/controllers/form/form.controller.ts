import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFormDto } from 'src/dto/create-form.dto';
import { FormService } from 'src/services/form/form.service';

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {}

    @Get()
    getFormData() {
        return this.formService.getFormInfo();
    }

    @Post()
    submitForm(@Body() createFormDto: CreateFormDto) {
        return this.formService.submitFormData(createFormDto);
    }
}
