import { DatabaseConfig } from "@/infra/postgres/config/DatabaseConfig";
import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: "postgres",
      host: DatabaseConfig.DB_HOST,
      port: DatabaseConfig.DB_PORT,
      username: DatabaseConfig.DB_USERNAME,
      password: DatabaseConfig.DB_PASSWORD,
      database: DatabaseConfig.DB_NAME,
      entities: [`__dirname/entity/**/*{.ts,.js}`],
      migrations: [`__dirname/migration/**/*{.ts,.js}`],
    }),
  ],
})
export class InfraModule {}
