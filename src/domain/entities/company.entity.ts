import { LocationEntity } from "./location.entity";
import { UserEntity } from "./user.entity";

export type CompanyEntity = {
  id: string;
  name: string;
  website: string;
  cnpj: string;
  user: UserEntity;
  locations: LocationEntity[];
};
