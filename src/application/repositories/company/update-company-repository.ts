import { CompanyDto } from "@/application/dto/company/company";
import { UpdateCompanyDto } from "@/application/dto/company/update-company.dto";

export interface UpdateCompanyRepository {
  updateCompany: (
    companyId: string,
    updateCompanyDto: UpdateCompanyDto
  ) => Promise<CompanyDto>;
}
