import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid_v4 } from 'uuid';

import { ProductEntity } from './infra/Entities/Product.entity';
import { METADATA } from './utils/METADATA';

@Injectable()
export class AppService {
  constructor(
    @Inject(METADATA.PRODUCT_PROVIDER)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(product: any): Promise<ProductEntity> {
    const productEntity: ProductEntity = Object.assign(new ProductEntity(), {
      id: uuid_v4(),
      title: product.title,
      main_image: product.main_image,
      secodary_images: product.secondary_images,
      price: product.price,
      description: product.description,
      created_at: new Date(),
    } as ProductEntity);

    const newProduct = await this.productRepository.save(productEntity);

    return newProduct;
  }

  async getAllProducts(): Promise<ProductEntity[]> {
    console.log('Todos os produtos');

    return await this.productRepository.find();
  }

  async getProductById(id: string) {
    return await this.productRepository.findOneBy({
      id: id,
    });
  }
}
