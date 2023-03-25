import { Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class OrderResolver {
  @Query(() => String)
  hello() {
    return 'Pai nosso que está no ceu';
  }
}
