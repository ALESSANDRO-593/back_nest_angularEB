import { MigrationInterface, QueryRunner } from "typeorm";

export class Allentities1761801244334 implements MigrationInterface {
    name = 'Allentities1761801244334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persona" ("id" SERIAL NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_551ede1f9ac73b4e8f18495c6d" UNIQUE ("userId"), CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "mail" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "descripcion" character varying NOT NULL, "estado" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_af8d8b3d07fae559c37f56b3f43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido_producto" ("id" SERIAL NOT NULL, "pedidoId" integer NOT NULL, "productoId" integer NOT NULL, "cantidad" integer NOT NULL, CONSTRAINT "PK_97f69aaf286bdd82afbd487e4d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "descripcion" character varying NOT NULL, "estado" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nombre_completo" character varying NOT NULL, "dni" character varying NOT NULL, "telefono" character varying NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_user" ("roleId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_bd1bd925dd24214f451e44259ed" PRIMARY KEY ("roleId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_89e55dae19555d0d5fe8602b28" ON "role_user" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2a23ceb75c7511d0523c4aaf49" ON "role_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido" ADD CONSTRAINT "FK_febe8dbf9dfd20a3d7d2531aa00" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ADD CONSTRAINT "FK_6085b3aa6d0d1aec5985d3cb2ce" FOREIGN KEY ("pedidoId") REFERENCES "pedido"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" ADD CONSTRAINT "FK_da007c96a1af3dbf6a925bf6581" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "productos" ADD CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_user" ADD CONSTRAINT "FK_89e55dae19555d0d5fe8602b281" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role_user" ADD CONSTRAINT "FK_2a23ceb75c7511d0523c4aaf492" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role_user" DROP CONSTRAINT "FK_2a23ceb75c7511d0523c4aaf492"`);
        await queryRunner.query(`ALTER TABLE "role_user" DROP CONSTRAINT "FK_89e55dae19555d0d5fe8602b281"`);
        await queryRunner.query(`ALTER TABLE "productos" DROP CONSTRAINT "FK_aee00189e42dd8880cdfe1bb1e7"`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" DROP CONSTRAINT "FK_da007c96a1af3dbf6a925bf6581"`);
        await queryRunner.query(`ALTER TABLE "pedido_producto" DROP CONSTRAINT "FK_6085b3aa6d0d1aec5985d3cb2ce"`);
        await queryRunner.query(`ALTER TABLE "pedido" DROP CONSTRAINT "FK_febe8dbf9dfd20a3d7d2531aa00"`);
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2a23ceb75c7511d0523c4aaf49"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_89e55dae19555d0d5fe8602b28"`);
        await queryRunner.query(`DROP TABLE "role_user"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TABLE "productos"`);
        await queryRunner.query(`DROP TABLE "pedido_producto"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "persona"`);
    }

}
