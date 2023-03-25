export class PaymentEntity {
  id: string;
  product_id: string;
  product_title: string;
  product_price: number;
  product_images: string[];
  product_description: string;
  user_id: string;
  user_name: string;
  user_email: string;
  user_cep: string;
  amount: number;
  installments: number;
  freight: number;
  paid_in: Date;
  payment_status: string;
  registered_in: Date;
}
