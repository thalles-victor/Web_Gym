import { Module } from '@nestjs/common';
import { GetAllService } from './get-all.service';
import { GetAllController } from './get-all.controller';

@Module({
  providers: [GetAllService],
  controllers: [GetAllController],
})
export class GetAllModule {}
