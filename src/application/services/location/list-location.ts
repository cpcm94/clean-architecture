import { ListLocationsRepository } from "@/application/repositories/location/list-location-repository";
import { LocationDto } from "@/application/dto/location/location";
import { ListLocations } from "@/domain/use-cases/location/list-location";

export class ListLocationsService implements ListLocations {
  constructor(
    private readonly listLocationsRepository: ListLocationsRepository
  ) {}
  async list(): Promise<LocationDto[]> {
    // test props
    return this.listLocationsRepository.listLocations();
  }
}
