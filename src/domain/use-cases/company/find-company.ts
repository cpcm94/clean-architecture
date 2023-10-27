import { CompanyEntity } from "@/domain/entities/company.entity";

export interface FindCompany {
  find: ({
    where,
  }: {
    where: Partial<CompanyEntity>;
  }) => Promise<CompanyEntity | null>;
}
