import { Module } from '@nestjs/common';
import { FormModule } from './form/modules/form.module';



@Module({
  imports: [FormModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
