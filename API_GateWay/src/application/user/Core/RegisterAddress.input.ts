import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterAddressInputType {
  @Field(() => String)
  address: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  postal_code: string;

  @Field(() => String)
  country: string;
}
