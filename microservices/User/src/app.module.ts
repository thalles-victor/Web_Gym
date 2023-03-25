import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infra/providers/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserProviderModule } from './infra/providers/user-provider/user-provider.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { migration1676407218689 } from './infra/migration/1676407218689-migration';
import { AuthModule } from './application/auth/auth.module';
import { v4 } from 'uuid';
import { UserEntity } from './Entities/User.entity';
import { AddressEntity } from './Entities/Address.entity';
import { RegisterAddressModule } from './application/address/register/register-address.module';
import { RegisterModule } from './application/register/register.module';
import { GetAllModule } from './application/address/get-all/get-all.module';
import { RecoverUserInformatinosModule } from './application/recover-informations/recover-informations.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    ClientsModule.register([
      {
        name: 'CLIEN_USER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: `user_ms_client?${v4()}`,
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: `user_ms_group?id=${v4()}`,
          },
        },
      },
    ]),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.USER_DATABASE_HOST,
      port: parseInt(process.env.USER_DATABASE_PORT),
      username: process.env.USER_DATABASE_USER,
      password: process.env.USER_DATABASE_PASSWORD,
      database: process.env.USER_DATABASE_DB,
      entities: [UserEntity, AddressEntity],
      migrations: [migration1676407218689],
      synchronize: true,
    }),
    RegisterModule,
    DatabaseModule,
    UserProviderModule,
    AuthModule,
    RegisterAddressModule,
    GetAllModule,
    RecoverUserInformatinosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
