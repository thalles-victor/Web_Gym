import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterUserInputType {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
