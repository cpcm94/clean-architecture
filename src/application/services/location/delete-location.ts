import { DeleteLocationRepository } from "@/application/repositories/location/delete-location-repository";
import { DeleteLocation } from "@/domain/use-cases/location/delete-location";

export class DeleteLocationService implements DeleteLocation {
  constructor(
    private readonly deleteLocationRepository: DeleteLocationRepository
  ) {}
  async delete(locationId: string): Promise<void> {
    // test props
    return this.deleteLocationRepository.deleteLocation(locationId);
  }
}
