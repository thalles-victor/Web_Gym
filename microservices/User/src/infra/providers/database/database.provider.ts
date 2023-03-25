import { FactoryProvider } from '@nestjs/common';
import { UserEntity } from '../../../Entities/User.entity';
import { METADATA } from 'src/utils/METADATA';
import { DataSource } from 'typeorm';
import { AddressEntity } from 'src/Entities/Address.entity';

export const databaseProvider: FactoryProvider[] = [
  {
    provide: METADATA.DATABASE_PROVIDER,
    useFactory: async () => {
      return await new DataSource({
        type: 'postgres',
        host: process.env.USER_DATABASE_HOST,
        port: parseInt(process.env.USER_DATABASE_PORT),
        username: process.env.USER_DATABASE_USER,
        password: process.env.USER_DATABASE_PASSWORD,
        database: process.env.USER_DATABASE_DB,
        entities: [UserEntity, AddressEntity],
        synchronize: true,
      }).initialize();
    },
  },
];
