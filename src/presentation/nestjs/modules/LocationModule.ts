import { CreateLocationService } from "@/application/services/location/create-location";
import { DeleteLocationService } from "@/application/services/location/delete-location";
import { ListLocationsService } from "@/application/services/location/list-location";
import { UpdateLocationService } from "@/application/services/location/update-location";
import { Module } from "@nestjs/common";

@Module({
  controllers: [],
  providers: [
    CreateLocationService,
    UpdateLocationService,
    DeleteLocationService,
    ListLocationsService,
  ],
})
export class LocationModule {}
