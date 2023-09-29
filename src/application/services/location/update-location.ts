import { LocationDto } from "@/application/dto/location/location";
import { UpdateLocationDto } from "@/application/dto/location/update-location.dto";
import { UpdateLocationRepository } from "@/application/repositories/location/update-location-repository";
import { UpdateLocation } from "@/domain/use-cases/location/update-location";

export class UpdateLocationService implements UpdateLocation {
  constructor(
    private readonly updateLocationRepository: UpdateLocationRepository
  ) {}
  async update(
    locationId: string,
    updateLocationDto: UpdateLocationDto
  ): Promise<LocationDto> {
    // test props
    return this.updateLocationRepository.updateLocation(
      locationId,
      updateLocationDto
    );
  }
}
