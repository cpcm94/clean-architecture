import { LocationDto } from "@/application/dto/location/location";
import { LocationRepository } from "@/application/repositories/location/location-repository";
import { FindLocation } from "@/domain/use-cases/location/find-location";
import { isNil } from "ramda";

export class FindLocationService implements FindLocation {
  constructor(private readonly locationRepository: LocationRepository) {}
  async find({
    where,
  }: {
    where: Partial<LocationDto>;
  }): Promise<LocationDto | null> {
    // test props
    const location = this.locationRepository.findLocation({
      where: where,
    });
    // create error class
    if (isNil(location)) throw new Error("Location not found");
    return location;
  }
}
