import { FactoryProvider } from '@nestjs/common';
import { AddressEntity } from 'src/Entities/Address.entity';
import { METADATA } from 'src/utils/METADATA';
import { DataSource } from 'typeorm';

export const addressRepository: FactoryProvider[] = [
  {
    provide: METADATA.ADDRESS_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AddressEntity),
    inject: [METADATA.DATABASE_PROVIDER],
  },
];
