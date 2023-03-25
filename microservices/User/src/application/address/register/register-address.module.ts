import { Module } from '@nestjs/common';
import { RegisterAddressService } from './register-address.service';
import { RegisterAddressController } from './register-address.controller';
import { AddressModule } from 'src/infra/providers/address/address.module';

@Module({
  imports: [AddressModule],
  providers: [RegisterAddressService],
  controllers: [RegisterAddressController],
})
export class RegisterAddressModule {}
