import { LocationDto } from "@/application/dto/location/location";
import { ListLocations } from "@/domain/use-cases/location/list-location";
import { LocationRepository } from "@/application/repositories/location/location-repository";

export class ListLocationsService implements ListLocations {
  constructor(private readonly locationRepository: LocationRepository) {}
  async list(): Promise<LocationDto[]> {
    // test props
    return this.locationRepository.listLocations();
  }
}
