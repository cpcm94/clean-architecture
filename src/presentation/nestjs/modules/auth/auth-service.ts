import { UserRepository } from "@/application/repositories/user/user-repository";
import { UserEntity } from "@/domain/entities/user.entity";
import { Inject, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { isNil } from "ramda";
import { JwtPayload } from "./type/jwt-payload";
import { TUserLoginResponse } from "./type/user-login-response";

export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,

    private readonly jwtService: JwtService
  ) {}

  public async validatePassword(
    password: string,
    salt: string,
    incomingPassword: string
  ): Promise<boolean> {
    const hash = await bcrypt.hash(password, salt);
    return hash === incomingPassword;
  }

  public async validateUser(
    username: string,
    password: string
  ): Promise<JwtPayload | null> {
    const user = await this.userRepository.getUser({ email: username });

    if (user) {
      const isPasswordValid: boolean = await this.validatePassword(
        user.password,
        user.salt,
        password
      );
      if (isPasswordValid) {
        return { id: user.id, email: user.email };
      }
    }

    return null;
  }

  public async login(
    username: string,
    password: string
  ): Promise<TUserLoginResponse> {
    const user = await this.validateUser(username, password);
    if (isNil(user)) throw new UnauthorizedException("Invalid credentials");

    return {
      user,
      accessToken: this.jwtService.sign(user),
    };
  }

  public async getUser({ id }: { id: string }): Promise<UserEntity | null> {
    return this.userRepository.getUser({ id });
  }
}
