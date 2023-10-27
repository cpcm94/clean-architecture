import { LocationEntity } from "@/domain/entities/location.entity";

export interface FindLocation {
  find: ({
    where,
  }: {
    where: Partial<LocationEntity>;
  }) => Promise<LocationEntity | null>;
}
