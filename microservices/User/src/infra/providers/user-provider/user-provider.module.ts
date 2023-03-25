import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProvider } from './user-provider.provider';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [...userProvider],
  exports: [...userProvider],
})
export class UserProviderModule {}
