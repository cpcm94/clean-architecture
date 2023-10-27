import { LocationDto } from "@/application/dto/location/location";
import { UpdateLocationDto } from "@/application/dto/location/update-location.dto";
import { LocationRepository } from "@/application/repositories/location/location-repository";
import { UpdateLocation } from "@/domain/use-cases/location/update-location";

export class UpdateLocationService implements UpdateLocation {
  constructor(private readonly locationRepository: LocationRepository) {}
  async update(
    locationId: string,
    updateLocationDto: UpdateLocationDto
  ): Promise<LocationDto> {
    // test props
    return this.locationRepository.updateLocation(
      locationId,
      updateLocationDto
    );
  }
}
