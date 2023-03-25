import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuid_v4 } from 'uuid';

import { UserEntity } from 'src/Entities/User.entity';
import { METADATA } from 'src/utils/METADATA';
import { Repository } from 'typeorm';
import { RegisterUserDTO } from './Core/RegisterUser.DTO';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RegisterService {
  constructor(
    @Inject(METADATA.USER_RESPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDTO: RegisterUserDTO) {
    console.log(userDTO);
    const userAlredyExist = await this.userRepository.findOneBy({
      email: userDTO.email,
    });

    if (userAlredyExist) {
      return {
        data: {
          user: null,
        },
        errors: 'Email alredy exist',
      };
    }

    const userEntity = Object.assign(new UserEntity(), {
      id: uuid_v4(),
      name: userDTO.name,
      email: userDTO.email,
      password: userDTO.password,
    } as UserEntity);

    const userd = await this.userRepository.save(userEntity);

    console.log('user is: ', userd);

    return {
      data: {
        user: userd,
        token: await this.genToken(userd),
      },

      errors: null,
    };
  }

  private async genToken(user: UserEntity) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return await this.jwtService.sign(payload);
  }
}
