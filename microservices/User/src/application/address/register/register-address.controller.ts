import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterAddressDTO } from './Core/RegisterAddress.DTO';
import { RegisterAddressService } from './register-address.service';

@Controller('register')
export class RegisterAddressController {
  constructor(
    private readonly registerAddressService: RegisterAddressService,
  ) {}

  @MessagePattern('USER_REGISTER_ADDRESS_TOPIC')
  async registerAddress(@Payload() address: RegisterAddressDTO) {
    return JSON.stringify(
      await this.registerAddressService.registerAddress(address),
    );
  }
}
