import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormController } from './form/controllers/form/form.controller';
import { FormService } from './form/services/form/form.service';
import { FormModule } from './form/modules/form.module';


@Module({
  imports: [FormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
