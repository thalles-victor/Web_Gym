import { DynamicModule, Module } from '@nestjs/common';
import { PagSeguroProps } from './Core/PagSeguroProps';
import { PagseguroService } from './pagseguro.service';

@Module({})
export class PagseguroModule {
  static register(options: PagSeguroProps): DynamicModule {
    return {
      module: PagseguroModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        PagseguroService,
      ],
      exports: [PagseguroService],
    };
  }
}
