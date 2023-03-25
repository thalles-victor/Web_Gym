import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CLIENT_PRODUCT') private readonly kafkaClient: ClientKafka,
  ) {}

  @MessagePattern('PRODUCT_REGISTER_TOPIC')
  async readReply(@Payload() message: any) {
    console.log(message);

    return JSON.stringify(await this.appService.createProduct(message.product));
  }

  @MessagePattern('GET_ALL_PRODUCTS')
  async listAllProducts() {
    console.log('chegou aqui');

    return JSON.stringify(await this.appService.getAllProducts());
  }

  @MessagePattern('GET_PRODUCT_BY_ID_TOPIC')
  async getProductById(@Payload() id: string) {
    return JSON.stringify(await this.appService.getProductById(id));
  }
}
