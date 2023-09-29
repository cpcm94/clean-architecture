import { LocationEntity } from "@/domain/entities/location.entity";

export interface UpdateLocation {
  update: (
    locationId: string,
    updateData: UpdateLocationModel
  ) => Promise<LocationEntity>;
}

type UpdateLocationModel = {
  name?: string;
  cep?: string;
  state?: string;
  city?: string;
  neighborhood?: string;
  street?: string;
  number?: string;
};
