import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async registerProduct(@Body() product: any) {
    const result = await this.productService.createProduct(product);

    return result;
  }
}
