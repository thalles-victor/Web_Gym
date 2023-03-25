import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInputType } from './Core/AuthInputType';
import { AuthObjType } from './Core/AuthObjectType';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthObjType)
  async signIn(@Args('user') user: AuthInputType) {
    return await this.authService.signIn(user);
  }
}
