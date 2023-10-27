import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { AppModule } from "../../presentation/nestjs/modules/AppModule";

export class ServerApplication {
  public async run(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    this.log();

    app.enableCors();

    await app.listen(3005);
  }

  private log(): void {
    Logger.log(
      `Server started on host: localhost; port: 3005;`,
      ServerApplication.name
    );
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}
