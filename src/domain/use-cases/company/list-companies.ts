import { CompanyEntity } from "@/domain/entities/company.entity";

export interface ListCompanies {
  list: () => Promise<CompanyEntity[]>;
}
