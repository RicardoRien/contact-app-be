import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';
import { RolesService } from 'src/roles/services/roles.service';

import { Role } from '../../utils/roles';
import { CreateUserInput } from '../dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private roleService: RolesService,
  ) { }

  async create(args: CreateUserInput) {
    try {
      const userExists = await this.findUserByEmail(args.email);

      if (userExists) {
        return {
          status: 'fail',
          message: 'User already exists with this email',
        };
      }

      const role = await this.roleService.findByName(args.role);

      // Create user.
      const password = await bcrypt.hash(args.password, 10);
      const user = this.userRepo.create({
        ...args,
        uuid: uuidv4(),
        password,
        role,
        createdBy: Role.OWNER
      });

      await this.userRepo.save(user);

      return { status: 'ok' };
    } catch (error) {
      return {
        status: 'fail',
        message: error.message ?? error,
      };
    }
  }

  findUserByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

}
