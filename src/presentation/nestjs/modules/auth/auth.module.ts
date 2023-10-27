import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth-service";
import { JwtStrategy } from "./jwt-strategy";
import { UserModule } from "../user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.API_ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: 7200 },
    }),
    TypeOrmModule.forFeature([UserModule]),
  ],
  providers: [AuthService, PassportModule, JwtStrategy],
})
export class AuthModule {}
