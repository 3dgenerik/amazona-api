import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsRepository } from './products.repository';
import { Products } from './products.entity';
import { IProduct } from 'src/interfaces/interfaces';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productsRepository: ProductsRepository,
  ) {}

  async getAllProducts():Promise<string>{
    return 'Jovicaaaaa'
  }
  
}
