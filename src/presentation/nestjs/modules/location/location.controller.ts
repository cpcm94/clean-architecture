import { CreateLocationService } from "@/application/services/location/create-location";
import { DeleteLocationService } from "@/application/services/location/delete-location";
import { FindLocationService } from "@/application/services/location/find-location";
import { ListLocationsService } from "@/application/services/location/list-location";
import { UpdateLocationService } from "@/application/services/location/update-location";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateLocationDTO } from "./dto/create-location.dto";
import { UpdateLocationDTO } from "./dto/update-location.dto";

@UseGuards(AuthGuard("jwt"))
@Controller("location")
export class LocationController {
  constructor(
    private readonly createLocationService: CreateLocationService,
    private readonly findLocationService: FindLocationService,
    private readonly listLocationsService: ListLocationsService,
    private readonly deleteLocationService: DeleteLocationService,
    private readonly updateLocationService: UpdateLocationService
  ) {}

  @Get()
  async list() {
    return await this.listLocationsService.list();
  }

  @Get("/:locationId")
  async find(@Param("locationId") locationId: string) {
    return await this.findLocationService.find({ where: { id: locationId } });
  }

  @Post()
  async create(@Body() createLocationDto: CreateLocationDTO) {
    return await this.createLocationService.create(createLocationDto);
  }

  @Put("/:locationId")
  async update(
    @Param("locationId") locationId: string,
    @Body() updateLocationDTO: UpdateLocationDTO
  ) {
    return await this.updateLocationService.update(
      locationId,
      updateLocationDTO
    );
  }

  @Delete("/:locationId")
  async delete(@Param("locationId") locationId: string) {
    return await this.deleteLocationService.delete(locationId);
  }
}
