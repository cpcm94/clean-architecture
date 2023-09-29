import { LocationEntity } from "@/domain/entities/location.entity";

export interface ListLocations {
  list: () => Promise<LocationEntity[]>;
}
