import { Module } from '@nestjs/common';
import { RecoverUserInformationsController } from './recover-informations.controller';
import { RecoverUserInformationsService } from './recover-informations.service';

@Module({
  controllers: [RecoverUserInformationsController],
  providers: [RecoverUserInformationsService],
})
export class RecoverUserInformatinosModule {}
