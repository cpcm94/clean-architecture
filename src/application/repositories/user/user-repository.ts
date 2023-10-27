import { CreateUserDto } from "@/application/dto/user/create-user.dto";
import { UserDto } from "@/application/dto/user/user";

export interface GenerateUserDto extends CreateUserDto {
  salt: string;
}

export class UserRepository {
  createUser: (createUserDto: GenerateUserDto) => Promise<{ id: string }>;
  getUser: ({
    id,
    email,
  }: {
    id?: string;
    email?: string;
  }) => Promise<UserDto | null>;
}
