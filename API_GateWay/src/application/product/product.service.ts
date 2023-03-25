import { Injectable, OnModuleInit } from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';

import { RegisterProductDTO } from './DTOs/registerProduct.dto';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class ProductService implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'gateway-client',
        brokers: ['kafka_service:9092'],
      },
      consumer: {
        groupId: 'gateway-groupid',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('PRODUCT_REGISTER_TOPIC');
    this.client.subscribeToResponseOf('GET_ALL_PRODUCTS');
    this.client.subscribeToResponseOf('GET_PRODUCT_BY_ID_TOPIC');
    await this.client.connect();
  }

  async createProduct(product: RegisterProductDTO) {
    const result = await lastValueFrom(
      this.client.send('PRODUCT_REGISTER_TOPIC', {
        product,
      }),
    );

    return result;
  }

  async getAllProducts() {
    const result = await lastValueFrom(
      this.client.send('GET_ALL_PRODUCTS', {}),
    );

    return result;
  }

  async getProductById(id: string) {
    const result = await lastValueFrom(
      this.client.send('GET_PRODUCT_BY_ID_TOPIC', id),
    );

    return result;
  }
}
