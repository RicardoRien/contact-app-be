import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';
import { SuccessReponse } from 'src/utils/models/success';
import { CreateUserInput } from '../dto/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => SuccessReponse)
  createUser(@Args('args') args: CreateUserInput) {
    return this.usersService.create(args);
  }
}
