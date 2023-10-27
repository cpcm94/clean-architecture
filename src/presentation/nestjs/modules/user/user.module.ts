import { CreateUserRepository } from "@/application/repositories/user/create-user-repository";
import { GetUserRepository } from "@/application/repositories/user/get-user-repository";
import { UserRepository } from "@/application/repositories/user/user-repository";
import { CreateUserService } from "@/application/services/user/create-user";
import { GetUserService } from "@/application/services/user/get-user";
import { Module } from "@nestjs/common";
import { InfraModule } from "../database/infra.module";
import { UserController } from "./user.controller";

@Module({
  imports: [InfraModule],
  controllers: [UserController],
  providers: [
    {
      provide: CreateUserService,
      useFactory: (userRepository: CreateUserRepository) => {
        return new CreateUserService(userRepository);
      },
      inject: [UserRepository],
    },
    {
      provide: GetUserService,
      useFactory: (userRepository: GetUserRepository) => {
        return new GetUserService(userRepository);
      },
      inject: [UserRepository],
    },
  ],
})
export class UserModule {}
