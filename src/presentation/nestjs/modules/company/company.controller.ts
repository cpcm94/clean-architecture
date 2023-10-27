import { CreateCompanyService } from "@/application/services/company/create-company";
import { DeleteCompanyService } from "@/application/services/company/delete-company";
import { FindCompanyService } from "@/application/services/company/find-company";
import { ListCompaniesService } from "@/application/services/company/list-companies";
import { UpdateCompanyService } from "@/application/services/company/update-company";
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
import { CreateCompanyDTO } from "./dto/create-company.dto";
import { UpdateCompanyDTO } from "./dto/update-company.dto";

@UseGuards(AuthGuard("jwt"))
@Controller("company")
export class CompanyController {
  constructor(
    private readonly createCompanyService: CreateCompanyService,
    private readonly findCompanyService: FindCompanyService,
    private readonly listCompaniesService: ListCompaniesService,
    private readonly deleteCompanyService: DeleteCompanyService,
    private readonly updateCompanyService: UpdateCompanyService
  ) {}

  @Get()
  async list() {
    return await this.listCompaniesService.list();
  }

  @Get("/:companyId")
  async find(@Param("companyId") companyId: string) {
    return await this.findCompanyService.find({ where: { id: companyId } });
  }

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDTO) {
    return await this.createCompanyService.create(createCompanyDto);
  }

  @Put("/:companyId")
  async update(
    @Param("companyId") companyId: string,
    @Body() updateCompanyDTO: UpdateCompanyDTO
  ) {
    return await this.updateCompanyService.update(companyId, updateCompanyDTO);
  }

  @Delete("/:companyId")
  async delete(@Param("companyId") companyId: string) {
    return await this.deleteCompanyService.delete(companyId);
  }
}
