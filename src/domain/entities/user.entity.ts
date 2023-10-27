import { CompanyEntity } from "./company.entity";

export type UserEntity = {
  id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
  companies: CompanyEntity[];
};
