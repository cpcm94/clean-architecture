import { UpdateCompanyRepository } from "@/application/repositories/company/update-company-repository";
import { CompanyDto } from "@/application/dto/company/company";
import { UpdateCompany } from "@/domain/use-cases/company/update-company";
import { UpdateCompanyDto } from "../../dto/company/update-company.dto";

export class UpdateCompanyService implements UpdateCompany {
  constructor(
    private readonly updateCompanyRepository: UpdateCompanyRepository
  ) {}
  async update(
    companyId: string,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<CompanyDto> {
    // test props
    return this.updateCompanyRepository.updateCompany(
      companyId,
      updateCompanyDto
    );
  }
}
