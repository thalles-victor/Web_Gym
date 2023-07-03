import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Payload } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../auth/current-user';
import { UserObjType } from '../Core/ObjectsTypes/UserObjectType';
import { RegisterAddressInputType } from './Core/RegisterAddress.input';
import { RegisterAddressObjType } from './Core/RegisterAddress.objtype';
import { RegisterUserInputType } from './Core/RegisterUser.input';
import { RegisterUserObjType } from './Core/RegisterUser.objtype';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => String)
  async auth() {
    return 'protected';
  }

  @Query(() => UserObjType)
  async getOneUserByEmail(@Args('email') email: string) {
    return await this.userService.findUserByEmail(email);
  }

  @Mutation(() => RegisterUserObjType)
  async registerUser(@Args('user') user: RegisterUserInputType) {
    return await this.userService.registerUser(user);
  }

  @Mutation(() => RegisterAddressObjType)
  @UseGuards(GqlAuthGuard)
  async registerAddress(
    @Args('address') address: RegisterAddressInputType,
    @CurrentUser() user: any,
  ) {
    return await this.userService.registerAddress(user.sub, address);
  }

  @Query(() => UserObjType)
  @UseGuards(GqlAuthGuard)
  async getUserInformations(@CurrentUser() user: any) {
    return user;
  }

  @Query(() => [RegisterAddressObjType])
  async getAllAddressByUserId(@Args('user_id') user_id: string) {
    return this.userService.getAllAddressByUserId(user_id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => UserObjType)
  async recoverUserInformation(@CurrentUser() payload: any) {
    return this.userService.recoverUserInformation(payload.id);
  }
}
