import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth-service";
import { LoginDTO } from "./dto/login.dto";
import { TUserLoginResponse } from "./type/user-login-response";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  async signIn(
    @Body() { login, password }: LoginDTO
  ): Promise<TUserLoginResponse> {
    return await this.authService.login(login, password);
  }
}
