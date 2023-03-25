import { Inject, Injectable } from '@nestjs/common';
import { AddressEntity } from 'src/Entities/Address.entity';
import { addressRepository } from 'src/infra/providers/address/address.repository';
import { METADATA } from 'src/utils/METADATA';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllService {
  constructor(
    @Inject(METADATA.ADDRESS_REPOSITORY)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async getAllAddressByUserId(user_id: string) {
    const allAddress = await this.addressRepository.find({
      where: {
        user: {
          id: user_id,
        },
      },
    });

    if (!allAddress) {
      return {
        errors: 'Not found address',
        data: null,
      };
    }

    return {
      errors: null,
      data: allAddress,
    };
  }
}
