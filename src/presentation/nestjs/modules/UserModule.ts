import { CreateUserService } from "@/application/services/user/create-user";
import { Module, Provider } from "@nestjs/common";

@Module({
  controllers: [],
  providers: [CreateUserService],
})
export class UserModule {}
