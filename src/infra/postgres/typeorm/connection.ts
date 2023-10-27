import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

const migrationsDir = path.resolve(__dirname, "migration", "*{.ts,.js}");
const entitiesDir = path.join(__dirname, "entity", "**", "*.entity{.ts,.js}");

export const dataSource = new DataSource({
  type: "postgres",
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  migrations: [migrationsDir],
  entities: [entitiesDir],
  synchronize: false,
  logging: true,
  migrationsRun: false,
});
