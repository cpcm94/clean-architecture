import { LocationDto } from "@/application/dto/location/location";

export interface FindLocationRepository {
  findLocation: ({
    where,
  }: {
    where: Partial<LocationDto>;
  }) => Promise<LocationDto | null>;
}
