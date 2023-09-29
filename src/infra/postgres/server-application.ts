import { AppModule } from "@/presentation/nestjs/modules/AppModule";
import { NestFactory } from "@nestjs/core";
import { ApiServerConfig } from "./config/ApiServerConfig";

export class ServerApplication {
  // private readonly host: string = ApiServerConfig.HOST

  private readonly port: number = ApiServerConfig.PORT;

  public async run(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    await app.listen(this.port);
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}
