import { LocationDto } from "@/application/dto/location/location";
import { CreateLocationDto } from "@/application/dto/location/create-location.dto";
import { UpdateLocationDto } from "@/application/dto/location/update-location.dto";
import { LocationRepository } from "@/application/repositories/location/location-repository";
import { TypeOrmLocation } from "../../entity/location/type-orm-location.entity";
import { TypeOrmLocationMapper } from "../../entity/location/type-orm-location-mapper";
import { Repository } from "typeorm";
import { isNil } from "ramda";

export class TypeOrmLocationRepository implements LocationRepository {
  constructor(
    private readonly locationRepository: Repository<TypeOrmLocation>
  ) {}
  async listLocations(): Promise<LocationDto[]> {
    const query = await this.locationRepository
      .createQueryBuilder("location")
      .getMany();

    return TypeOrmLocationMapper.toDomainEntities(query);
  }

  async findLocation({
    where,
  }: {
    where: Partial<LocationDto>;
  }): Promise<LocationDto | null> {
    const query = await this.locationRepository.findOne({ where: where });

    if (isNil(query)) return null;

    return TypeOrmLocationMapper.toDomainEntity(query);
  }

  async createLocation(
    createLocationDto: CreateLocationDto
  ): Promise<LocationDto> {
    const createdLocation = this.locationRepository.create(createLocationDto);

    const savedOrmLocation = await this.locationRepository.save(
      createdLocation
    );

    return TypeOrmLocationMapper.toDomainEntity(savedOrmLocation);
  }

  async updateLocation(
    locationId: string,
    updateLocationDto: UpdateLocationDto
  ): Promise<LocationDto> {
    const locationToUpdate = await this.locationRepository.findOne({
      where: { id: locationId },
    });

    const updatedLocation = await this.locationRepository.save({
      ...locationToUpdate,
      ...updateLocationDto,
    });

    return TypeOrmLocationMapper.toDomainEntity(updatedLocation);
  }

  async deleteLocation(locationId: string): Promise<void> {
    await this.locationRepository.delete(locationId);
  }
}
