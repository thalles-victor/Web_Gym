import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RecoverUserInformationsService } from './recover-informations.service';

@Controller()
export class RecoverUserInformationsController {
  constructor(
    private readonly recoverUserService: RecoverUserInformationsService,
  ) {}

  @MessagePattern('USER_RECOVER_USER_INFORMATIONS')
  async handle(@Payload() user_id: string) {
    return await this.recoverUserService.execute(user_id);
  }
}
