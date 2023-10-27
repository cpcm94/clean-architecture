import { CompanyDto } from "@/application/dto/company/company";
import { CreateCompanyDto } from "@/application/dto/company/create-company.dto";
import { UpdateCompanyDto } from "@/application/dto/company/update-company.dto";

export class CompanyRepository {
  createCompany: (createCompanyDto: CreateCompanyDto) => Promise<CompanyDto>;
  deleteCompany: (companyId: string) => Promise<void>;
  listCompanies: () => Promise<CompanyDto[]>;
  updateCompany: (
    companyId: string,
    updateCompanyDto: UpdateCompanyDto
  ) => Promise<CompanyDto>;
  findCompany: ({
    where,
  }: {
    where: Partial<CompanyDto>;
  }) => Promise<CompanyDto | null>;
}
