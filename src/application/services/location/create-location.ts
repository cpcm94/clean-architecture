import { LocationDto } from "@/application/dto/location/location";
import { CreateLocation } from "@/domain/use-cases/location/create-location";
import { CreateLocationDto } from "../../dto/location/create-location.dto";
import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { LocationRepository } from "@/application/repositories/location/location-repository";
import { isNil } from "ramda";

export class CreateLocationService implements CreateLocation {
  constructor(
    private readonly locationRepository: LocationRepository,
    private readonly companyRepository: CompanyRepository
  ) {}
  async create(createLocationDto: CreateLocationDto): Promise<LocationDto> {
    // test props
    const companyExists = this.companyRepository.findCompany({
      where: { id: createLocationDto.company.id },
    });
    // create error class
    if (isNil(companyExists)) throw new Error("Company not found");
    return this.locationRepository.createLocation(createLocationDto);
  }
}
