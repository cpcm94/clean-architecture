import { LocationDto } from "@/application/dto/location/location";
import { CreateLocationDto } from "@/application/dto/location/create-location.dto";
import { UpdateLocationDto } from "@/application/dto/location/update-location.dto";
import { LocationRepository } from "@/application/repositories/location/location-repository";
import { TypeOrmLocation } from "../../entity/location/type-orm-location";
import { TypeOrmLocationMapper } from "../../entity/location/type-orm-location-mapper";
import { Repository } from "typeorm";

export class TypeOrmLocationRepository
  extends Repository<TypeOrmLocation>
  implements LocationRepository
{
  async listLocations(): Promise<LocationDto[]> {
    const query = await this.createQueryBuilder("location").getMany();

    return TypeOrmLocationMapper.toDomainEntities(query);
  }

  async createLocation(
    createLocationDto: CreateLocationDto
  ): Promise<LocationDto> {
    const createdLocation = this.create(createLocationDto);

    const savedOrmLocation = await this.save(createdLocation);

    return TypeOrmLocationMapper.toDomainEntity(savedOrmLocation);
  }

  async updateLocation(
    locationId: string,
    updateLocationDto: UpdateLocationDto
  ): Promise<LocationDto> {
    const locationToUpdate = await this.findOne({ where: { id: locationId } });

    const updatedLocation = await this.save({
      ...locationToUpdate,
      ...updateLocationDto,
    });

    return TypeOrmLocationMapper.toDomainEntity(updatedLocation);
  }

  async deleteLocation(locationId: string): Promise<void> {
    await this.delete(locationId);
  }
}
