import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GetAllService } from './get-all.service';

@Controller('get-all')
export class GetAllController {
  constructor(private readonly getAllAddressService: GetAllService) {}

  @MessagePattern('GET_ALL_ADDRESS_BY_USER_ID')
  getAllAddressByUserId(@Payload() user_id: string) {
    return this.getAllAddressService.getAllAddressByUserId(user_id);
  }
}
