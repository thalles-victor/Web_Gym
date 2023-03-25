import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductObjType {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  main_image: string;

  @Field(() => [String])
  secodary_images: string[];

  @Field(() => String)
  description: string;

  @Field(() => String)
  price: number;

  @Field(() => String)
  created_at: Date;
}
