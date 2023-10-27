import { CompanyDto } from "@/application/dto/company/company";
import { ListCompanies } from "@/domain/use-cases/company/list-companies";
import { CompanyRepository } from "@/application/repositories/company/company-repository";

export class ListCompaniesService implements ListCompanies {
  constructor(private readonly companyRepository: CompanyRepository) {}
  async list(): Promise<CompanyDto[]> {
    // test props
    return this.companyRepository.listCompanies();
  }
}
