import { LocationEntity } from "@/domain/entities/location.entity";

export interface UpdateLocation {
  update: (
    locationId: string,
    updateData: LocationEntity
  ) => Promise<LocationEntity>;
}
