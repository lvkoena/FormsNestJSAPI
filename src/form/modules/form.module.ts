import { Module } from '@nestjs/common';
import { FormController } from '../controllers/form/form.controller';
import { FormService } from '../services/form/form.service';


@Module({
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
