import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class ConfigModule {
  static register(): DynamicModule {
    return {
      module: ConfigModule,
      providers: [],
    };
  }
}
