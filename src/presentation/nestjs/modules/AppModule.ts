import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CompanyModule } from "./company/company.module";
import { InfraModule } from "./database/infra.module";
import { LocationModule } from "./location/location.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [InfraModule, AuthModule, UserModule, LocationModule, CompanyModule],
})
export class AppModule {}
