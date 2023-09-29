import { CreateCompanyRepository } from "@/application/repositories/company/create-company-repository";
import { CompanyDto } from "@/application/dto/company/company";
import { CreateCompany } from "@/domain/use-cases/company/create-company";
import { CreateCompanyDto } from "../../dto/company/create-company.dto";

export class CreateCompanyService implements CreateCompany {
  constructor(
    private readonly createCompanyRepository: CreateCompanyRepository
  ) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<CompanyDto> {
    // test props
    return this.createCompanyRepository.createCompany(createCompanyDto);
  }
}
