import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,

      options: {
        client: {
          brokers: ['kafka_service:9092'],
        },
        consumer: {
          groupId: 'user_213sadf2314dsc',
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
