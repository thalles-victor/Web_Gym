import { FactoryProvider } from '@nestjs/common';
import { METADATA } from 'src/utils/METADATA';
import { DataSource } from 'typeorm';
import { ProductEntity } from '../../Entities/Product.entity';

export const productProvider: FactoryProvider[] = [
  {
    provide: METADATA.PRODUCT_PROVIDER,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    inject: [METADATA.DATABASE_PROVIDER],
  },
];
