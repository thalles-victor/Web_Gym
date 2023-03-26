import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { GraphQLError } from 'graphql';

import { RegisterUserInputType } from './Core/RegisterUser.input';
import { lastValueFrom } from 'rxjs';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { RegisterAddressInputType } from './Core/RegisterAddress.input';

@Injectable()
export class UserService implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user_client?id=5TajteCqku2c63ed5c695a406',
        brokers: ['kafka_service:9092'],
      },
      consumer: {
        groupId: 'use_group?id=SYrKbmC8okKY63ed5c76a4411',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('REGISTER_USER_KAFKA_TOPIC');
    this.client.subscribeToResponseOf('USER_REGISTER_ADDRESS_TOPIC');
    this.client.subscribeToResponseOf('GET_ALL_ADDRESS_BY_USER_ID');
    this.client.subscribeToResponseOf('USER_RECOVER_USER_INFORMATIONS');
    this.client.subscribeToResponseOf('GET_USER_BY_EMAIL');
    await this.client.connect();
  }

  async findUserByEmail(email: string) {
    const result = await lastValueFrom(
      this.client.send('GET_USER_BY_EMAIL', email),
    );

    if (result === 'null') {
      throw new GraphQLError('User not found');
    }
    return result;
  }

  async registerUser(user: RegisterUserInputType) {
    const result = await lastValueFrom(
      this.client.send('REGISTER_USER_KAFKA_TOPIC', JSON.stringify(user)),
    );
    if (result.errors) {
      throw new GraphQLError(result.errors);
    }
    return result.data;
  }

  async registerAddress(user_id: string, address: RegisterAddressInputType) {
    const result = await lastValueFrom(
      this.client.send('USER_REGISTER_ADDRESS_TOPIC', {
        user_id: user_id,
        address,
      }),
    );

    if (result.errors !== null) {
      throw new GraphQLError(result.errors);
    }

    return result.data;
  }

  async getAllAddressByUserId(user_id: string) {
    const result = await lastValueFrom(
      this.client.send('GET_ALL_ADDRESS_BY_USER_ID', user_id),
    );

    if (result.errors !== 'null') {
      throw new GraphQLError(result.errors);
    }

    return result.data;
  }

  async recoverUserInformations(user_id: string) {
    const result = await lastValueFrom(
      this.client.send('USER_RECOVER_USER_INFORMATIONS', user_id),
    );

    if (result.errors !== null) {
      throw new GraphQLError(result.errors);
    }

    return result.data;
  }
}
