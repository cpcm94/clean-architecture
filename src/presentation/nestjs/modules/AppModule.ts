import { Module } from "@nestjs/common";
import { AuthModule } from "./AuthModule";
import { CompanyModule } from "./CompanyModule";
import { InfraModule } from "./InfraModule";
import { LocationModule } from "./LocationModule";
import { UserModule } from "./UserModule";

@Module({
  imports: [InfraModule, AuthModule, UserModule, LocationModule, CompanyModule],
})
export class AppModule {}
