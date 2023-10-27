import { CreateCompanyRepository } from "@/application/repositories/company/create-company-repository";
import { CompanyDto } from "@/application/dto/company/company";
import { CreateCompany } from "@/domain/use-cases/company/create-company";
import { CreateCompanyDto } from "../../dto/company/create-company.dto";
import { CompanyRepository } from "@/application/repositories/company/company-repository";

export class CreateCompanyService implements CreateCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<CompanyDto> {
    // test props
    return this.companyRepository.createCompany(createCompanyDto);
  }
}
