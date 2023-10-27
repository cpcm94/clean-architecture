import { CompanyDto } from "@/application/dto/company/company";
import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { FindCompany } from "@/domain/use-cases/company/find-company";
import { isNil } from "ramda";

export class FindCompanyService implements FindCompany {
  constructor(private readonly companyRepository: CompanyRepository) {}
  async find({
    where,
  }: {
    where: Partial<CompanyDto>;
  }): Promise<CompanyDto | null> {
    // test props
    const company = this.companyRepository.findCompany({
      where: where,
    });
    // create error class
    if (isNil(company)) throw new Error("Company not found");
    return company;
  }
}
