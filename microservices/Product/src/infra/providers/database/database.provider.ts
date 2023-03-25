import { FactoryProvider } from '@nestjs/common';
import { ProductEntity } from 'src/infra/Entities/Product.entity';
import { DataSource } from 'typeorm';
import { METADATA } from '../../../utils/METADATA';

export const databaseProvider: FactoryProvider[] = [
  {
    provide: METADATA.DATABASE_PROVIDER,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.PRODUCT_DATABASE_HOST,
        port: parseInt(process.env.POSTGRES_GYM_DATABSE_PORT),
        username: process.env.PRODUCT_DATABASE_USER,
        password: process.env.PRODUCT_DATABASE_PASSWORD,
        database: process.env.PRODUCT_DATABASE_DB,
        entities: [ProductEntity],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
