import { DeleteCompanyRepository } from "@/application/repositories/company/delete-company-repository";
import { DeleteCompany } from "@/domain/use-cases/company/delete-company";

export class DeleteCompanyService implements DeleteCompany {
  constructor(
    private readonly deleteCompanyRepository: DeleteCompanyRepository
  ) {}
  async delete(companyId: string): Promise<void> {
    // test props
    return this.deleteCompanyRepository.deleteCompany(companyId);
  }
}
