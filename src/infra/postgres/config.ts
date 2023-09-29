import { get } from "env-var";

export class DatabaseConfig {
  public static readonly DB_HOST: string = get("DB_HOST").required().asString();
  public static readonly DB_USERNAME: string = get("DB_USERNAME")
    .required()
    .asString();
  public static readonly DB_PASSWORD: string = get("DB_PASSWORD")
    .required()
    .asString();
  public static readonly DB_NAME: string = get("DB_NAME").required().asString();
  public static readonly DB_PORT: number = get("DB_PORT")
    .required()
    .asPortNumber();
}
