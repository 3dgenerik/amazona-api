import { Controller, Get, Inject, Post, Body, Res, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.entity';
import { ProductsBodyDto } from './dto/products-body.dto';
import { Request, Response } from 'express';
import { IProduct } from '../interfaces/interfaces';
@Controller('products')
export class ProductsController {
  constructor(
    @Inject(ProductsService) private productsService: ProductsService,
  ) {}

  @Get('/')
  getAllProducts(): Promise<IProduct[]> {
    return this.productsService.getAllProducts();
  }

  @Post('/')
  postAllProducts(
    @Body() productsBodyDto: ProductsBodyDto,
    @Res() res: Response,
    @Req() req: Request,
  ): Promise<void> {
    return this.productsService.postAllProducts(productsBodyDto, res, req);
  }
}
