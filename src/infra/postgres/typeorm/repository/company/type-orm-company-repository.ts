import { CompanyDto } from "@/application/dto/company/company";
import { CreateCompanyDto } from "@/application/dto/company/create-company.dto";
import { UpdateCompanyDto } from "@/application/dto/company/update-company.dto";
import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { Repository } from "typeorm";
import { TypeOrmCompany } from "../../entity/company/type-orm-company";
import { TypeOrmCompanyMapper } from "../../entity/company/type-orm-company-mapper";

export class TypeOrmCompanyRepository
  extends Repository<TypeOrmCompany>
  implements CompanyRepository
{
  async listCompanies(): Promise<CompanyDto[]> {
    const query = await this.createQueryBuilder("company").getMany();

    return TypeOrmCompanyMapper.toDomainEntities(query);
  }

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyDto> {
    const createdCompany = this.create(createCompanyDto);

    const savedOrmCompany = await this.save(createdCompany);

    return TypeOrmCompanyMapper.toDomainEntity(savedOrmCompany);
  }

  async updateCompany(
    companyId: string,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<CompanyDto> {
    const companyToUpdate = await this.findOne({ where: { id: companyId } });

    const updatedCompany = await this.save({
      ...companyToUpdate,
      ...updateCompanyDto,
    });

    return TypeOrmCompanyMapper.toDomainEntity(updatedCompany);
  }

  async deleteCompany(companyId: string): Promise<void> {
    await this.delete(companyId);
  }
}
