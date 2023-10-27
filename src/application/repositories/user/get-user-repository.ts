import { UserDto } from "@/application/dto/user/user";

export interface GetUserRepository {
  getUser: ({
    id,
    email,
  }: {
    id?: string;
    email?: string;
  }) => Promise<UserDto | null>;
}
