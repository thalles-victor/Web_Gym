import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('GET_USER_BY_EMAIL')
  async getUser(@Payload() email: string) {
    console.log(email);

    const result = await this.appService.getUserByEmail(email);
    console.log('Result is: ', result);

    return JSON.stringify(result.user);
  }
}
