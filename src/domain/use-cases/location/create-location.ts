import { LocationEntity } from "@/domain/entities/location.entity";

export interface CreateLocation {
  create: (location: LocationEntity) => Promise<LocationEntity>;
}
