import { FactoryProvider } from '@nestjs/common';
import { UserEntity } from '../../../Entities/User.entity';
import { METADATA } from '../../../utils/METADATA';
import { DataSource } from 'typeorm';

export const userProvider: FactoryProvider[] = [
  {
    provide: METADATA.USER_RESPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: [METADATA.DATABASE_PROVIDER],
  },
];
