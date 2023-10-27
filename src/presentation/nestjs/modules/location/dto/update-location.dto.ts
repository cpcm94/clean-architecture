import { CreateLocationDTO } from "./create-location.dto";
import { OmitType, PartialType } from "@nestjs/mapped-types";

export class UpdateLocationDTO extends OmitType(
  PartialType(CreateLocationDTO),
  ["company"]
) {}
