export interface DeleteCompanyRepository {
  deleteCompany: (companyId: string) => Promise<void>;
}
