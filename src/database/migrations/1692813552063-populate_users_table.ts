import { MigrationInterface, QueryRunner } from "typeorm"
import * as bcrypt from 'bcrypt';
import { user } from '../seeds/create-master';
import { User } from '../../users/entities/user.entity';
import { Role } from '../../roles/entities/role.entity';
import { Role as RoleType } from '../../utils/roles';

import dataSource from '../../../ormconfig';

export class PopulateUsersTable1692813552063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.commitTransaction().then(async () => {
        await queryRunner.startTransaction().then(async () => {

          const password = await bcrypt.hash(user.password, 10);
          const role = await dataSource
            .getRepository(Role)
            .findOne({ where: { value: RoleType.OWNER } });

          const userMaster = {
            ...user,
            password,
            role
          };

          // Create master
          await dataSource.getRepository(User).save(userMaster);
        });
      });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}

}
