import { ObjectType, Field, HideField } from '@nestjs/graphql';
import { AddressObjectType } from './AddressObjectType';

@ObjectType()
export class UserObjType {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @HideField()
  password: string;

  @Field(() => [AddressObjectType])
  address: AddressObjectType[];
}
