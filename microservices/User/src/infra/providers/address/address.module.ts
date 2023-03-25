import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { addressRepository } from './address.repository';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [...addressRepository],
  exports: [...addressRepository],
})
export class AddressModule {}
