import { CompanyDto } from "../company/company";

export type CreateLocationDto = {
  name: string;
  cep: string;
  state: string;
  city: string;
  neighborhood?: string;
  street?: string;
  number?: string;
  company: CompanyDto;
};
