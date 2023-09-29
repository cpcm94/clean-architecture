import { ApiServerConfig } from "@/infra/postgres/config/ApiServerConfig";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { isNil } from "ramda";
import { AuthService } from "./auth-service";
import { JwtPayload } from "./type/jwt-payload";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ApiServerConfig.ACCESS_TOKEN_SECRET,
    });
  }

  public async validate(payload: JwtPayload): Promise<JwtPayload> {
    const user = await this.authService.getUser({ id: payload.id });

    if (isNil(user)) {
      throw new UnauthorizedException();
    }

    return { id: user.id, email: user.email };
  }
}
