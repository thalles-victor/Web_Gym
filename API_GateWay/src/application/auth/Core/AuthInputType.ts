import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthInputType {
  @Field()
  email: string;

  @Field()
  password: string;
}
