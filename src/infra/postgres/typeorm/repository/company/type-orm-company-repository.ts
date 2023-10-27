import { CompanyDto } from "@/application/dto/company/company";
import { CreateCompanyDto } from "@/application/dto/company/create-company.dto";
import { UpdateCompanyDto } from "@/application/dto/company/update-company.dto";
import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { isNil } from "ramda";
import { Repository } from "typeorm";
import { TypeOrmCompany } from "../../entity/company/type-orm-company.entity";
import { TypeOrmCompanyMapper } from "../../entity/company/type-orm-company-mapper";

export class TypeOrmCompanyRepository implements CompanyRepository {
  constructor(private readonly companyRepository: Repository<TypeOrmCompany>) {}
  async listCompanies(): Promise<CompanyDto[]> {
    const query = await this.companyRepository
      .createQueryBuilder("company")
      .getMany();

    return TypeOrmCompanyMapper.toDomainEntities(query);
  }

  async findCompany({
    where,
  }: {
    where: Partial<CompanyDto>;
  }): Promise<CompanyDto | null> {
    const query = await this.companyRepository.findOne({ where: where });

    if (isNil(query)) return null;

    return TypeOrmCompanyMapper.toDomainEntity(query);
  }

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyDto> {
    const createdCompany = this.companyRepository.create(createCompanyDto);

    const savedOrmCompany = await this.companyRepository.save(createdCompany);

    return TypeOrmCompanyMapper.toDomainEntity(savedOrmCompany);
  }

  async updateCompany(
    companyId: string,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<CompanyDto> {
    const companyToUpdate = await this.companyRepository.findOne({
      where: { id: companyId },
    });

    const updatedCompany = await this.companyRepository.save({
      ...companyToUpdate,
      ...updateCompanyDto,
    });

    return TypeOrmCompanyMapper.toDomainEntity(updatedCompany);
  }

  async deleteCompany(companyId: string): Promise<void> {
    await this.companyRepository.delete(companyId);
  }
}
