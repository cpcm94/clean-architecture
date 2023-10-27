import { CompanyEntity } from "./company.entity";

export type LocationEntity = {
  id: string;
  name: string;
  cep: string;
  state: string;
  city: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  company: CompanyEntity;
};
