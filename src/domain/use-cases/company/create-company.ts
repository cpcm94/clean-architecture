import { CompanyEntity } from "@/domain/entities/company.entity";

export interface CreateCompany {
  create: (company: CompanyEntity) => Promise<CompanyEntity>;
}
