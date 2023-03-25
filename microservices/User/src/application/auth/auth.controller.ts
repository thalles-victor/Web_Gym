import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { LoginDTO } from './core/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('AUTH_TOPIC')
  async login(@Payload() credentials: LoginDTO) {
    console.log(credentials);

    return this.authService.validateUser(credentials);
  }

  @MessagePattern('VALIDATE_USER_TOPIC')
  async validateUser(user: LoginDTO) {
    return await this.authService.validate(user);
  }
}
