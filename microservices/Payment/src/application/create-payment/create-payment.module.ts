import { Module } from '@nestjs/common';
import { CreatePaymentService } from './create-payment.service';
import { CreatePaymentController } from './create-payment.controller';
import { PagseguroModule } from 'src/infra/pagseguro/pagseguro.module';

@Module({
  imports: [
    PagseguroModule.register({
      url: 'https://sandbox.api.pagseguro.com/orders',
      tokenPagSeguro: 'token',
    }),
  ],
  providers: [CreatePaymentService],
  controllers: [CreatePaymentController],
})
export class CreatePaymentModule {}
