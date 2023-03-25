import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreatePaymentModule } from './application/create-payment/create-payment.module';
import { PagseguroModule } from './infra/pagseguro/pagseguro.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REGISTER_PAYMENT_MS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'register_payment?id=0',
            brokers: ['kafka_service:9092'],
          },
          consumer: {
            groupId: 'register_payment_group?id=0',
          },
        },
      },
    ]),
    CreatePaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
