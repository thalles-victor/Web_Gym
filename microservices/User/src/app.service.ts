import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UserEntity } from './Entities/User.entity';
import { METADATA } from './utils/METADATA';

@Injectable()
export class AppService {
  constructor(
    @Inject(METADATA.USER_RESPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOneBy({
      email: email,
    });

    if (!user) {
      return {
        user: null,
      };
    }

    return {
      user: user,
    };
  }
}
