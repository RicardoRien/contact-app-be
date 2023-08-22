import { Module } from '@nestjs/common';

import { Role } from './entities/role.entity';
import { RolesService } from './services/roles.service';
import { RolesResolver } from './resolvers/roles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RolesResolver, RolesService],
  exports: [RolesService],
})
export class RolesModule {}
