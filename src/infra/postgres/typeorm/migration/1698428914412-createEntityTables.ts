import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntityTables1698428914412 implements MigrationInterface {
  name = "CreateEntityTables1698428914412";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "Location" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "cep" character varying NOT NULL,
                "state" character varying NOT NULL,
                "city" character varying NOT NULL,
                "neighborhood" character varying,
                "street" character varying,
                "number" character varying,
                "companyId" uuid,
                CONSTRAINT "PK_d0125e359cde2707aec388b9c59" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "User" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "salt" character varying NOT NULL,
                CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "Company" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "website" character varying NOT NULL,
                "cnpj" character varying NOT NULL,
                "userId" uuid,
                CONSTRAINT "PK_b4993a6b3d3194767a59698298f" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "Location"
            ADD CONSTRAINT "FK_59edbef1047b0d4fc383596b708" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE "Company"
            ADD CONSTRAINT "FK_588758d1d2ae16fe80ba3a7777f" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "Company" DROP CONSTRAINT "FK_588758d1d2ae16fe80ba3a7777f"
        `);
    await queryRunner.query(`
            ALTER TABLE "Location" DROP CONSTRAINT "FK_59edbef1047b0d4fc383596b708"
        `);
    await queryRunner.query(`
            DROP TABLE "Company"
        `);
    await queryRunner.query(`
            DROP TABLE "User"
        `);
    await queryRunner.query(`
            DROP TABLE "Location"
        `);
  }
}
