import { CompanyDto } from "@/application/dto/company/company";

export interface ListCompaniesRepository {
  listCompanies: () => Promise<CompanyDto[]>;
}
