import { Injectable, OnModuleInit } from '@nestjs/common';
import { v4 as uuid_v4 } from 'uuid';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { GraphQLError } from 'graphql';
import { lastValueFrom } from 'rxjs';
import { AuthInputType } from './Core/AuthInputType';

@Injectable()
export class AuthService implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user_client?id=4i53v0PfKUMc63ed5c37c381d',
        brokers: ['kafka_service:9092'],
      },
      consumer: {
        groupId: 'use_group?id=PY6gL6ufeau863ed5c543b698',
      },
    },
  })
  kafkaClient: ClientKafka;

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('AUTH_TOPIC');
    this.kafkaClient.subscribeToResponseOf('VALIDATE_USER_TOPIC');
    await this.kafkaClient.connect();
  }

  async validateUser(user: AuthInputType) {
    const result = (await lastValueFrom(
      this.kafkaClient.send('VALIDATE_USER_TOPIC', user),
    )) as any;

    console.log(result);

    if (result.errors) {
      return null;
    }

    return result.data.user;
  }

  async signIn(user: AuthInputType) {
    const result = await lastValueFrom(
      this.kafkaClient.send('AUTH_TOPIC', JSON.stringify(user)),
    );

    console.log(result);

    if (!result.user) {
      throw new GraphQLError(result.error);
    }

    return result;
  }
}
