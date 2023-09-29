import { CreateUserDto } from "@/application/dto/user/create-user.dto";
import { UserDto } from "@/application/dto/user/user";

interface GenerateUserDto extends CreateUserDto {
  salt: string;
}

export interface CreateUserRepository {
  createUser: (createUserDto: GenerateUserDto) => Promise<UserDto>;
}