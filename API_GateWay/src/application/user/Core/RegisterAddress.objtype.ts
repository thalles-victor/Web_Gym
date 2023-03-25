import { ObjectType, Field } from '@nestjs/graphql';
import { UserObjType } from 'src/application/Core/ObjectsTypes/UserObjectType';

@ObjectType()
export class RegisterAddressObjType {
  @Field()
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

  @Field(() => UserObjType)
  user: UserObjType;
}
