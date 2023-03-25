import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterUserDTO } from './Core/RegisterUser.DTO';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerUserService: RegisterService) {}

  @MessagePattern('REGISTER_USER_KAFKA_TOPIC')
  async registerUser(@Payload() user: RegisterUserDTO) {
    console.log('User is: ', user);

    return JSON.stringify(await this.registerUserService.register(user));
  }
}
