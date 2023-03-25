import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { productProvider } from './product-provider.provider';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [...productProvider],
  exports: [...productProvider],
})
export class ProductProviderModule {}
