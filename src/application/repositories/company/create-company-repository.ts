import { CompanyDto } from "../../dto/company/company";
import { CreateCompanyDto } from "../../dto/company/create-company.dto";

export interface CreateCompanyRepository {
  createCompany: (createCompanyDto: CreateCompanyDto) => Promise<CompanyDto>;
}
