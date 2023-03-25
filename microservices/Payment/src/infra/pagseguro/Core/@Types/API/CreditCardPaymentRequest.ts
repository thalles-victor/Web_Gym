export type CreditCardPaymentRequest = {
  reference_id: string;
  customer: {
    name: string;
    email: string;
    tax_id: string;
    phones: {
      country: string;
      area: string;
      number: string;
      type: string;
    }[];
  };
  items: {
    reference_id: string;
    name: string;
    quantity: number;
    unit_amount: number;
  }[];

  shipping: {
    address: {
      street: string;
      number: string;
      complement: string;
      locality: string;
      city: string;
      region_code: string;
      country: string;
      postal_code: string;
    };
  };
  notification_urls: string[];
  charges: {
    reference_id: string;
    description: string;
    amount: {
      value: number;
      currency: 'BRL' | string;
    };
    payment_method: {
      type: 'CREDIT_CARD' | 'DEBIT_CARD' | 'BOLETO';
      installments: number;
      capture: true;
      card: {
        encrypted: string;
        security_code: string;
        holder: {
          name: string;
        };
        store: boolean;
      };
    };
  }[];
};
