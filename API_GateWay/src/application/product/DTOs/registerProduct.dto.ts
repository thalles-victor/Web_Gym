import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterProductDTO {
  @Field(() => String)
  title: string;

  @Field(() => String)
  main_image: string;

  @Field(() => [String])
  secondary_images: string[];

  @Field(() => String)
  description: string;

  @Field(() => Number)
  price: number;
}
