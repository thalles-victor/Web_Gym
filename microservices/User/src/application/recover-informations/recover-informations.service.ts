import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/Entities/User.entity';
import { METADATA } from 'src/utils/METADATA';
import { Repository } from 'typeorm';

import { AddressEntity } from '../../Entities/Address.entity';

@Injectable()
export class RecoverUserInformationsService {
  constructor(
    @Inject(METADATA.USER_RESPOSITORY)
    private readonly userRepository: Repository<UserEntity>,

    @Inject(METADATA.ADDRESS_REPOSITORY)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async execute(user_id: string) {
    console.log('Recover user information', user_id);

    const user = await this.userRepository.findOne({
      where: {
        id: user_id,
      },
      relations: {
        address: true,
      },
    });

    if (!user) {
      return {
        errors: 'User not found',
        data: null,
      };
    }

    return {
      errors: null,
      data: user,
    };
  }
}
