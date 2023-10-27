import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { DeleteCompany } from "@/domain/use-cases/company/delete-company";

export class DeleteCompanyService implements DeleteCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}
  async delete(companyId: string): Promise<void> {
    // test props
    return this.companyRepository.deleteCompany(companyId);
  }
}
