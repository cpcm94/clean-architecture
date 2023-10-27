import { CompanyRepository } from "@/application/repositories/company/company-repository";
import { UserRepository } from "@/application/repositories/user/user-repository";
import { CreateCompanyService } from "@/application/services/company/create-company";
import { DeleteCompanyService } from "@/application/services/company/delete-company";
import { FindCompanyService } from "@/application/services/company/find-company";
import { ListCompaniesService } from "@/application/services/company/list-companies";
import { UpdateCompanyService } from "@/application/services/company/update-company";
import { Module } from "@nestjs/common";
import { InfraModule } from "../database/infra.module";
import { CompanyController } from "./company.controller";

@Module({
  imports: [InfraModule],
  controllers: [CompanyController],
  providers: [
    {
      provide: CreateCompanyService,
      useFactory: (
        companyRepository: CompanyRepository,
        userRepository: UserRepository
      ) => {
        return new CreateCompanyService(companyRepository);
      },
      inject: [CompanyRepository, CompanyRepository],
    },
    {
      provide: ListCompaniesService,
      useFactory: (companyRepository: CompanyRepository) => {
        return new ListCompaniesService(companyRepository);
      },
      inject: [CompanyRepository],
    },
    {
      provide: UpdateCompanyService,
      useFactory: (companyRepository: CompanyRepository) => {
        return new UpdateCompanyService(companyRepository);
      },
      inject: [CompanyRepository],
    },
    {
      provide: FindCompanyService,
      useFactory: (companyRepository: CompanyRepository) => {
        return new FindCompanyService(companyRepository);
      },
      inject: [CompanyRepository],
    },
    {
      provide: DeleteCompanyService,
      useFactory: (companyRepository: CompanyRepository) => {
        return new DeleteCompanyService(companyRepository);
      },
      inject: [CompanyRepository],
    },
  ],
})
export class CompanyModule {}
