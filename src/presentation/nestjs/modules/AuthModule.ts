import { ApiServerConfig } from "@/infra/postgres/config/ApiServerConfig";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "../auth/auth-service";
import { JwtStrategy } from "../auth/jwt-strategy";
import { UserModule } from "./UserModule";

@Module({
  controllers: [],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: ApiServerConfig.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: 7200 },
    }),
    UserModule,
  ],
  providers: [AuthService, PassportModule, JwtStrategy],
})
export class AuthModule {}
