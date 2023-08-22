import { MigrationInterface, QueryRunner } from 'typeorm';
import { roles } from '../seeds/create-roles';
import { Role } from '../../roles/entities/role.entity';
import dataSource from '../../../ormconfig';

export class PopulateRolesTable1692578863694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.commitTransaction().then(async () => {
      await queryRunner.startTransaction().then(async () => {
        await dataSource.getRepository(Role).save(roles);
      });
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
