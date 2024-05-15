import { Injectable } from '@nestjs/common';
import { CreateFormDto } from 'src/dto/create-form.dto';

@Injectable()
export class FormService {
    private form = [];

    getFormInfo(){}

    submitFormData(createFormDto: CreateFormDto) {
        this.form.push(createFormDto);
        return {message: 'Form is submitted successfully', form: createFormDto }
    }
}
