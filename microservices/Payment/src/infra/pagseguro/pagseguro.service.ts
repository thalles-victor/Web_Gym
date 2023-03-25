import { Inject, Injectable } from '@nestjs/common';
import { PagSeguroProps } from './Core/PagSeguroProps';
import { CreditCardPaymentRequest } from './Core/@Types/API/CreditCardPaymentRequest';
import axios, { AxiosInstance } from 'axios';
import { CreditCardPaymentResponse } from './Core/@Types/API/CreditCardPaymentResponse';

export interface PaymentProps {
  payment_type: 'BOLETO' | 'CREDIT_CARD';
  order: CreditCardPaymentRequest;
}

@Injectable()
export class PagseguroService {
  private url: string;

  private axios: AxiosInstance;
  constructor(
    @Inject('CONFIG_OPTIONS') private readonly options: PagSeguroProps,
  ) {
    this.url = options.url;

    this.axios = axios.create({
      headers: {
        Authorization: `Bearer ${options.tokenPagSeguro}`,
      },
    });
  }

  async payment({ payment_type, order }: PaymentProps) {
    if (payment_type === 'CREDIT_CARD') {
      return await this.creditCardPayment(order);
    } else if (payment_type === 'BOLETO') {
      return await this.boletoPayment();
    }
  }

  private async creditCardPayment(order: CreditCardPaymentRequest) {
    const response: CreditCardPaymentResponse | undefined = await this.axios
      .post(this.url, {
        ...order,
      } as CreditCardPaymentRequest)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        return undefined;
      });

    if (!response) {
      return null;
    }

    return response;
  }

  private async boletoPayment() {
    throw new Error('Payment with boleto');
  }
}
