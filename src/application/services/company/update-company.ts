import { CompanyDto } from "@/application/dto/company/company";
import { UpdateCompany } from "@/domain/use-cases/company/update-company";
import { UpdateCompanyDto } from "../../dto/company/update-company.dto";
import { CompanyRepository } from "@/application/repositories/company/company-repository";

export class UpdateCompanyService implements UpdateCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}
  async update(
    companyId: string,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<CompanyDto> {
    // test props
    return this.companyRepository.updateCompany(companyId, updateCompanyDto);
  }
}
