import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/Entities/User.entity';
import { METADATA } from 'src/utils/METADATA';
import { Repository } from 'typeorm';
import { compareSync } from 'bcrypt';
import { LoginDTO } from './core/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(METADATA.USER_RESPOSITORY)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDTO) {
    const user = await this.userRepository.findOneBy({
      email: email,
    });

    if (!user) {
      return {
        error: 'user not found',
      };
    }

    if (!compareSync(password, user.password)) {
      return {
        error: 'password is not valid',
      };
    }

    return {
      user: { ...user },
      token: this.genToken(user),
    };
  }

  private genToken(user: UserEntity) {
    const payload = {
      sub: user.id,
      name: user.name,
    };

    return this.jwtService.sign(payload);
  }

  async validate({ email, password }: LoginDTO) {
    const user = await this.userRepository.findOneBy({
      email: email,
    });

    if (user && password === user.password) {
      const { password, ...result } = user;

      return {
        data: {
          user: result,
        },
        errors: null,
      };
    }

    return {
      data: null,
      errors: 'Credentials invalid',
    };
  }
}
