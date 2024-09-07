import { Module } from '@nestjs/common';
import { Form } from '../entity/form.entity';
import { FormService } from '../services/form/form.service';
import { FormController } from '../controllers/form/form.controller';
import { FormRepository } from '../repository/form.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Form, FormRepository])],
    controllers: [FormController],
    providers: [FormService],
})
export class FormModule {}
