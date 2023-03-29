import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1680092735647 implements MigrationInterface {
    name = 'addedUserEntity1680092735647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "datebirth" character varying NOT NULL, "address" character varying NOT NULL, "mobilephone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_e5ca66148c37f0bd8d619659253" UNIQUE ("mobilephone"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "mobile_index" ON "users" ("mobilephone") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."mobile_index"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
