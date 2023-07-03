import { InputType, Field } from '@nestjs/graphql';
import { GraphQLScalarType } from 'graphql';
import { FileUpload } from 'src/@types/FileUpload';

let GraphQLUpload: GraphQLScalarType;

import('graphql-upload/GraphQLUpload.mjs').then(({ default: Upload }) => {
  GraphQLUpload = Upload;
});

@InputType()
export class RegisterProductDTO {
  @Field(() => String)
  title: string;

  @Field(() => GraphQLUpload)
  main_image: Promise<FileUpload>;

  @Field(() => [GraphQLUpload])
  secondary_images: Promise<FileUpload>[];

  @Field(() => String)
  description: string;

  @Field(() => Number)
  price: number;
}
