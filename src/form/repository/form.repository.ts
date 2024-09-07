import { EntityRepository, Repository } from 'typeorm';
import { Form } from '../entity/form.entity';

@EntityRepository(Form)
export class FormRepository extends Repository<Form> {}
