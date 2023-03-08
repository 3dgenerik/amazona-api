import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { ProductsRepository } from './products.repository';
import { Products } from './products.entity';
import { IProduct } from 'src/interfaces/interfaces';
import { ProductsBodyDto } from './dto/products-body.dto';
import { Response, Request } from 'express';
import { data } from 'src/data/data';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private productsRepository: ProductsRepository,
  ) {}

  async getAllProducts(): Promise<IProduct[]> {
    return data;
  }

  async postAllProducts(
    productsBodyDto: ProductsBodyDto,
    res: Response,
    req: Request,
  ): Promise<void> {
    const { data } = productsBodyDto;

    console.log(data);

    // let product = this.productsRepository.create({username, email})

    res.send(data);
  }
}
