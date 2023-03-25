import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { PagseguroService } from 'src/infra/pagseguro/pagseguro.service';

@Injectable()
export class CreatePaymentService implements OnModuleInit {
  constructor(private readonly pageSeguroSerivice: PagseguroService) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user_client?id=49bc1848-b811-4e55-b3fd-293a3b1615b2',
        brokers: ['kafka_service:9092'],
      },
      consumer: {
        groupId: 'use_group?id=c94325e2-db8c-4df6-bb19-8f2eaf9e9b7f',
      },
    },
  })
  clientKafka: ClientKafka;

  async onModuleInit() {
    this.clientKafka.subscribeToResponseOf('GET_PRODUCT_BY_ID_TOPIC');
    await this.clientKafka.connect();
  }

  async execute(product_id: string, order: any) {
    const product = await lastValueFrom(
      this.clientKafka.send('GET_PRODUCT_BY_ID_TOPIC', product_id),
    );

    console.log(product);

    return await this.pageSeguroSerivice.payment({
      payment_type: 'CREDIT_CARD',
      order,
    });
  }
}
