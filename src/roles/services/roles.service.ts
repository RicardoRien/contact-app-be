import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from '../entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Role) private roleRepo: Repository<Role>) {}

  findAll() {
    return `This action returns all roles`;
  }

  findByName(name: string) {
    return this.roleRepo.findOne({ where: { value: name } });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }
}
