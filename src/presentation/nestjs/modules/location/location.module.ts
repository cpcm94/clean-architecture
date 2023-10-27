import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { LocationRepository } from "@/application/repositories/location/location-repository";
import { CreateLocationService } from "@/application/services/location/create-location";
import { DeleteLocationService } from "@/application/services/location/delete-location";
import { FindLocationService } from "@/application/services/location/find-location";
import { ListLocationsService } from "@/application/services/location/list-location";
import { UpdateLocationService } from "@/application/services/location/update-location";
import { Module } from "@nestjs/common";
import { InfraModule } from "../database/infra.module";
import { LocationController } from "./location.controller";

@Module({
  imports: [InfraModule],
  controllers: [LocationController],
  providers: [
    {
      provide: CreateLocationService,
      useFactory: (
        locationRepository: LocationRepository,
        companyRepository: CompanyRepository
      ) => {
        return new CreateLocationService(locationRepository, companyRepository);
      },
      inject: [LocationRepository, CompanyRepository],
    },
    {
      provide: ListLocationsService,
      useFactory: (locationRepository: LocationRepository) => {
        return new ListLocationsService(locationRepository);
      },
      inject: [LocationRepository],
    },
    {
      provide: UpdateLocationService,
      useFactory: (locationRepository: LocationRepository) => {
        return new UpdateLocationService(locationRepository);
      },
      inject: [LocationRepository],
    },
    {
      provide: FindLocationService,
      useFactory: (locationRepository: LocationRepository) => {
        return new FindLocationService(locationRepository);
      },
      inject: [LocationRepository],
    },
    {
      provide: DeleteLocationService,
      useFactory: (locationRepository: LocationRepository) => {
        return new DeleteLocationService(locationRepository);
      },
      inject: [LocationRepository],
    },
  ],
})
export class LocationModule {}
