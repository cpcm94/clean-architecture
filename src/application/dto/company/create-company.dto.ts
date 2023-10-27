import { UserDto } from "../user/user";

export type CreateCompanyDto = {
  name: string;
  website: string;
  cnpj: string;
  user: UserDto;
};
