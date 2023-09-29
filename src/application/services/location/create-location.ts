import { CreateLocationRepository } from "@/application/repositories/location/create-location-repository";
import { LocationDto } from "@/application/dto/location/location";
import { CreateLocation } from "@/domain/use-cases/location/create-location";
import { CreateLocationDto } from "../../dto/location/create-location.dto";

export class CreateLocationService implements CreateLocation {
  constructor(
    private readonly createLocationRepository: CreateLocationRepository
  ) {}
  async create(createLocationDto: CreateLocationDto): Promise<LocationDto> {
    // test props
    return this.createLocationRepository.createLocation(createLocationDto);
  }
}
