import { Inject, Injectable } from '@nestjs/common';
import { AddressEntity } from 'src/Entities/Address.entity';
import { UserEntity } from 'src/Entities/User.entity';
import { METADATA } from 'src/utils/METADATA';
import { Repository } from 'typeorm';
import { v4 as uuid_v4 } from 'uuid';
import { RegisterAddressDTO } from './Core/RegisterAddress.DTO';

@Injectable()
export class RegisterAddressService {
  constructor(
    @Inject(METADATA.USER_RESPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
    @Inject(METADATA.ADDRESS_REPOSITORY)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async registerAddress({ user_id, address }: RegisterAddressDTO) {
    const user = await this.userRepository.findOneBy({
      id: user_id,
    });

    if (!user) {
      return {
        data: null,
        errors: 'user not found',
      };
    }

    const addressEntity = Object.assign(new AddressEntity(), {
      id: uuid_v4(),
      address: address.address,
      city: address.city,
      country: address.country,
      postal_code: address.postal_code,
      state: address.state,
      user: user,
    } as AddressEntity);

    const newAddress = await this.addressRepository.save({
      ...addressEntity,
    });

    return {
      data: newAddress,
      errors: null,
    };
  }
}
