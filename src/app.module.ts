import { Module } from '@nestjs/common';
import { FormModule } from './form/modules/form.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lebohangmokoena',
      password: 'Indsafri',
      database: 'form',
      autoLoadEntities: true,
      synchronize: false, // Set to false in production
    }),
    FormModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
