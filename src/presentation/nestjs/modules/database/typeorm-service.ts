import { dataSource } from "@/infra/postgres/typeorm/connection";
import { Injectable, Logger, OnModuleInit } from "@nestjs/common";

@Injectable()
export class TypeOrmService implements OnModuleInit {
  private readonly logger = new Logger("TypeOrm Init");

  onModuleInit() {
    dataSource.initialize().catch((e) => {
      this.logger.error(e);
    });
  }
}
