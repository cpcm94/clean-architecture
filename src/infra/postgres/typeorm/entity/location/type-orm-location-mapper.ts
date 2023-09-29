import { LocationEntity } from "@/domain/entities/location.entity";
import { TypeOrmLocation } from "./type-orm-location";
import { isNil } from "ramda";

export class TypeOrmLocationMapper {
  public static toOrmEntity(domainLocation: LocationEntity): TypeOrmLocation {
    const ormLocation: TypeOrmLocation = new TypeOrmLocation();

    ormLocation.id = domainLocation.id;
    ormLocation.cep = domainLocation.cep;
    ormLocation.city = domainLocation.city;
    ormLocation.name = domainLocation.name;
    ormLocation.company.id = domainLocation.companyId;
    ormLocation.state = domainLocation.state;

    if (!isNil(domainLocation.neighborhood))
      ormLocation.neighborhood = domainLocation.neighborhood;

    if (!isNil(domainLocation.street))
      ormLocation.street = domainLocation.street;

    if (!isNil(domainLocation.number))
      ormLocation.number = domainLocation.number;

    return ormLocation;
  }

  public static toOrmEntities(
    domainLocations: LocationEntity[]
  ): TypeOrmLocation[] {
    return domainLocations.map((domainLocations) =>
      this.toOrmEntity(domainLocations)
    );
  }

  public static toDomainEntity(ormLocation: TypeOrmLocation): LocationEntity {
    return {
      id: ormLocation.id,
      cep: ormLocation.cep,
      city: ormLocation.city,
      name: ormLocation.name,
      companyId: ormLocation.company.id,
      neighborhood: ormLocation.neighborhood,
      street: ormLocation.street,
      number: ormLocation.number,
      state: ormLocation.state,
    };
  }

  public static toDomainEntities(
    ormLocations: TypeOrmLocation[]
  ): LocationEntity[] {
    return ormLocations.map((ormLocations) =>
      this.toDomainEntity(ormLocations)
    );
  }
}
