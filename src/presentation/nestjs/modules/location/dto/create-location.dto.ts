import { CompanyDto } from "@/application/dto/company/company";
import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateLocationDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsOptional()
  street?: string;

  @IsString()
  @IsOptional()
  number?: string;

  @IsString()
  @IsOptional()
  neighborhood?: string;

  @IsNotEmpty()
  company: CompanyDto;
}
