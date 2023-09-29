import { LocationDto } from "../../dto/location/location";
import { CreateLocationDto } from "../../dto/location/create-location.dto";

export interface CreateLocationRepository {
  createLocation: (
    createLocationDto: CreateLocationDto
  ) => Promise<LocationDto>;
}
