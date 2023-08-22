import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRolesTable1692558919981 implements MigrationInterface {
    name = 'CreateRolesTable1692558919981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "value" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "status" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_cdc7776894e484eaed828ca0616" UNIQUE ("uuid"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
