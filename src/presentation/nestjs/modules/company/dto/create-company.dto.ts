import { UserDto } from "@/application/dto/user/user";
import { IsNotEmpty, IsString, IsUUID, IsUrl } from "class-validator";

export class CreateCompanyDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  website: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  user: UserDto;
}
