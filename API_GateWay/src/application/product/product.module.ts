import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ProductController } from './product.controller';

@Module({
  imports: [],
  providers: [ProductService, ProductResolver],
  controllers: [ProductController],
})
export class ProductModule {}
