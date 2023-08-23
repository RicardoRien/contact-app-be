import { Resolver } from '@nestjs/graphql';
import { RolesService } from '../services/roles.service';
import { Role } from '../entities/role.entity';

@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}
}

