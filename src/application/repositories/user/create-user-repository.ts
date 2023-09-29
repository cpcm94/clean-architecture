import { UserDto } from "@/application/dto/user/user";
import { GenerateUserDto } from "./user-repository";

export interface CreateUserRepository {
  createUser: (createUserDto: GenerateUserDto) => Promise<UserDto>;
}
