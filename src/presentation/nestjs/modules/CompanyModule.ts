import { CreateCompanyService } from "@/application/services/company/create-company";
import { DeleteCompanyService } from "@/application/services/company/delete-company";
import { ListCompaniesService } from "@/application/services/company/list-companies";
import { UpdateCompanyService } from "@/application/services/company/update-company";
import { Module } from "@nestjs/common";

@Module({
  controllers: [],
  providers: [
    CreateCompanyService,
    UpdateCompanyService,
    DeleteCompanyService,
    ListCompaniesService,
  ],
})
export class CompanyModule {}
