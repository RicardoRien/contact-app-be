import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { RolesService } from '../services/roles.service';
import { Role } from '../entities/role.entity';

@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Query(() => [Role], { name: 'roles' })
  findAll() {
    return this.rolesService.findAll();
  }

  @Query(() => Role, { name: 'role' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.findOne(id);
  }
}

