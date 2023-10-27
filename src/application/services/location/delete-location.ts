import { LocationRepository } from "@/application/repositories/location/location-repository";
import { DeleteLocation } from "@/domain/use-cases/location/delete-location";

export class DeleteLocationService implements DeleteLocation {
  constructor(private readonly locationRepository: LocationRepository) {}
  async delete(locationId: string): Promise<void> {
    // test props
    return this.locationRepository.deleteLocation(locationId);
  }
}
