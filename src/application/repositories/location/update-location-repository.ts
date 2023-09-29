import { LocationDto } from "@/application/dto/location/location";
import { UpdateLocationDto } from "@/application/dto/location/update-location.dto";

export interface UpdateLocationRepository {
  updateLocation: (
    locationId: string,
    updateLocationDto: UpdateLocationDto
  ) => Promise<LocationDto>;
}
