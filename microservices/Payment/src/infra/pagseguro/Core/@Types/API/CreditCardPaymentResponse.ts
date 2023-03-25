export type CreditCardPaymentResponse = {
  id: string;
  reference_id: string;
  created_at: Date;
  customer: {
    name: string;
    email: string;
    tax_id: string;
    phones: {
      type: string;
      country: string;
      area: string;
      number: string;
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
      country: 'BRA' | string;
      postal_code: string;
    };
  };
  charges: {
    id: string;
    reference_id: string;
    status: 'PAID' | string;
    created_at: string;
    paid_at: string;
    description: string;
    amount: {
      value: number;
      currency: 'BRL' | string;
      summary: {
        total: number;
        paid: number;
        refunded: number;
      };
      payment_response: {
        code: number;
        message: 'SUCESSO' | string;
        reference: string;
      };
      payment_method: {
        type: 'CREDIT_CARD' | 'DEBIT_CARD' | 'BOLETO';
        installments: number;
        capture: boolean;
        card: {
          brand: string;
          first_digits: string;
          last_digits: string;
          exp_month: string;
          exp_year: string;
          holder: {
            name: string;
          };
          store: string;
        };
        soft_descriptor: string;
      };
    };
    links: {
      rel: string;
      href: string;
      media: string;
      type: 'GET' | 'POST' | string;
    }[];
  }[];
  notifications_urls: string[];
  links: {
    rel: 'SELF' | 'PAY' | string;
    href: string;
    media: 'application/json' | string;
    type: 'GET' | 'POST' | string;
  }[];
};
