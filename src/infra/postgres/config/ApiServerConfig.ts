import { get } from "env-var";

export class ApiServerConfig {
  public static readonly PORT: number = get("API_PORT")
    .required()
    .asPortNumber();
  public static readonly ACCESS_TOKEN_SECRET: string = get(
    "API_ACCESS_TOKEN_SECRET"
  )
    .required()
    .asString();
}
