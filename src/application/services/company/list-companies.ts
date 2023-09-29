import { ListCompaniesRepository } from "@/application/repositories/company/list-company-repository";
import { CompanyDto } from "@/application/dto/company/company";
import { ListCompanies } from "@/domain/use-cases/company/list-companies";

export class ListCompaniesService implements ListCompanies {
  constructor(
    private readonly listCompaniesRepository: ListCompaniesRepository
  ) {}
  async list(): Promise<CompanyDto[]> {
    // test props
    return this.listCompaniesRepository.listCompanies();
  }
}
