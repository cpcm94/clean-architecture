import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
