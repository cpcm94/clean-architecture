import { CreateCompanyDTO } from "./create-company.dto";
import { OmitType, PartialType } from "@nestjs/mapped-types";

export class UpdateCompanyDTO extends OmitType(PartialType(CreateCompanyDTO), [
  "user",
]) {}
