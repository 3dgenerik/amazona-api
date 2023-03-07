import { Controller, Get, Inject } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(@Inject(ProductsService) private productsService: ProductsService) {}

  @Get('/')
  getAllProducts(): Promise<string> {
    return this.productsService.getAllProducts();
  }
}
