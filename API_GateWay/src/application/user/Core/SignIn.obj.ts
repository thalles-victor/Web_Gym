import { ObjectType, Field } from '@nestjs/graphql';
import { UserObjType } from 'src/application/Core/ObjectsTypes/UserObjectType';

@ObjectType()
export class SignInObjType {
  @Field(() => UserObjType)
  user: UserObjType;

  @Field(() => String)
  token: string;
}
