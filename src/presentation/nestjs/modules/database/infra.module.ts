import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { LocationRepository } from "@/application/repositories/location/location-repository";
import { UserRepository } from "@/application/repositories/user/user-repository";
import { dataSource } from "@/infra/postgres/typeorm/connection";
import { TypeOrmCompany } from "@/infra/postgres/typeorm/entity/company/type-orm-company.entity";
import { TypeOrmLocation } from "@/infra/postgres/typeorm/entity/location/type-orm-location.entity";
import { TypeOrmUser } from "@/infra/postgres/typeorm/entity/user/type-orm-user.entity";
import { TypeOrmCompanyRepository } from "@/infra/postgres/typeorm/repository/company/type-orm-company-repository";
import { TypeOrmLocationRepository } from "@/infra/postgres/typeorm/repository/location/type-orm-location-repository";
import { TypeOrmUserRepository } from "@/infra/postgres/typeorm/repository/user/type-orm-user-repository";
import { Global, Module, Provider } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmService } from "./typeorm-service";
import "dotenv/config";

const typeorm: Provider[] = [
  TypeOrmService,
  {
    provide: UserRepository,
    useFactory: () => {
      return new TypeOrmUserRepository(dataSource.getRepository(TypeOrmUser));
    },
    inject: [TypeOrmService],
  },
  {
    provide: CompanyRepository,
    useFactory: () => {
      return new TypeOrmCompanyRepository(
        dataSource.getRepository(TypeOrmCompany)
      );
    },
    inject: [TypeOrmService],
  },
  {
    provide: LocationRepository,
    useFactory: () => {
      return new TypeOrmLocationRepository(
        dataSource.getRepository(TypeOrmLocation)
      );
    },
    inject: [TypeOrmService],
  },
];

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`__dirname/entity/**/*{.ts,.js}`],
      migrations: [`__dirname/migration/**/*{.ts,.js}`],
    }),
  ],
  providers: typeorm,
  exports: [UserRepository, CompanyRepository, LocationRepository],
})
export class InfraModule {}
