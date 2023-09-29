export interface DeleteLocationRepository {
  deleteLocation: (locationId: string) => Promise<void>;
}
