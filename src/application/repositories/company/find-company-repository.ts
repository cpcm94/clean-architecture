import { CompanyDto } from "@/application/dto/company/company";

export interface FindCompanyRepository {
  findCompany: ({
    where,
  }: {
    where: Partial<CompanyDto>;
  }) => Promise<CompanyDto | null>;
}
