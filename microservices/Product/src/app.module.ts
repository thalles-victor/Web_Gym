import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infra/providers/database/database.module';
import { ProductProviderModule } from './infra/providers/product-provider/product-provider.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    ClientsModule.register([
      {
        name: 'CLIENT_PRODUCT',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'client_id=234kdfnds32dxsfdsfsd',
            brokers: ['kafka_service:9092'],
          },
          consumer: {
            groupId: 'product_group?id=4dsf13asldo21k2kk23k123',
          },
        },
      },
    ]),

    DatabaseModule,
    ProductProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
