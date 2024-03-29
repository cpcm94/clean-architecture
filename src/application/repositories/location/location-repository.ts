import { CreateLocationDto } from "@/application/dto/location/create-location.dto";
import { LocationDto } from "@/application/dto/location/location";
import { UpdateLocationDto } from "@/application/dto/location/update-location.dto";

export class LocationRepository {
  createLocation: (
    createLocationDto: CreateLocationDto
  ) => Promise<LocationDto>;
  deleteLocation: (locationId: string) => Promise<void>;
  listLocations: () => Promise<LocationDto[]>;
  updateLocation: (
    locationId: string,
    updateLocationDto: UpdateLocationDto
  ) => Promise<LocationDto>;
  findLocation: ({
    where,
  }: {
    where: Partial<LocationDto>;
  }) => Promise<LocationDto | null>;
}
