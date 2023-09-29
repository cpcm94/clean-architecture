import { UserEntity } from "@/domain/entities/user.entity";

export interface CreateUser {
  create: (user: UserEntity) => Promise<UserEntity>;
}
