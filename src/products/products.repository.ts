import { Repository } from 'typeorm';
import { Products } from './products.entity';

export class ProductsRepository extends Repository<Products> {}
