import { CompanyEntity } from "@/domain/entities/company.entity";
import { TypeOrmCompany } from "./type-orm-company.entity";

export class TypeOrmCompanyMapper {
  public static toOrmEntity(domainCompany: CompanyEntity): TypeOrmCompany {
    const ormCompany: TypeOrmCompany = new TypeOrmCompany();

    ormCompany.id = domainCompany.id;
    ormCompany.cnpj = domainCompany.cnpj;
    ormCompany.name = domainCompany.name;
    ormCompany.website = domainCompany.website;
    ormCompany.user = domainCompany.user;
    ormCompany.locations = domainCompany.locations;

    return ormCompany;
  }

  public static toOrmEntities(
    domainCompanies: CompanyEntity[]
  ): TypeOrmCompany[] {
    return domainCompanies.map((domainCompanies) =>
      this.toOrmEntity(domainCompanies)
    );
  }

  public static toDomainEntity(ormCompany: TypeOrmCompany): CompanyEntity {
    return {
      id: ormCompany.id,
      cnpj: ormCompany.cnpj,
      name: ormCompany.name,
      website: ormCompany.website,
      user: ormCompany.user,
      locations: ormCompany.locations,
    };
  }

  public static toDomainEntities(
    ormCompanies: TypeOrmCompany[]
  ): CompanyEntity[] {
    return ormCompanies.map((ormCompanies) =>
      this.toDomainEntity(ormCompanies)
    );
  }
}
