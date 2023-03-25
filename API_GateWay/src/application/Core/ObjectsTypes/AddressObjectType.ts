import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressObjectType {
  @Field(() => String)
  id: string;

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
