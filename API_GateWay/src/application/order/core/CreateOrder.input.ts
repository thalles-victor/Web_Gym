import { InputType, Field } from '@nestjs/graphql';
import { RegisterAddressObjType } from 'src/application/user/Core/RegisterAddress.objtype';

@InputType()
export class CreateOrderInputType {
  @Field(() => String)
  product_id: string;

  @Field(() => String)
  address_id: string;

  @Field(() => String)
  amount: string;
}
