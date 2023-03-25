import { ObjectType, Field } from '@nestjs/graphql';
import { UserObjType } from 'src/application/Core/ObjectsTypes/UserObjectType';

@ObjectType()
export class AuthObjType {
  @Field()
  user: UserObjType;

  @Field()
  token: string;
}
