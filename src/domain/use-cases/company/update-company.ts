import { CompanyEntity } from "@/domain/entities/company.entity";

export interface UpdateCompany {
  update: (
    companyId: string,
    updateData: UpdateCompanyModel
  ) => Promise<CompanyEntity>;
}

type UpdateCompanyModel = {
  name?: string;
  website?: string;
  cnpj?: number;
};
