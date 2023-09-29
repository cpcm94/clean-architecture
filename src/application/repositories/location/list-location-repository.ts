import { LocationDto } from "@/application/dto/location/location";

export interface ListLocationsRepository {
  listLocations: () => Promise<LocationDto[]>;
}
