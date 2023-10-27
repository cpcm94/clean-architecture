import { GetUserRepository } from "@/application/repositories/user/get-user-repository";
import { UserRepository } from "@/application/repositories/user/user-repository";
import { UserEntity } from "@/domain/entities/user.entity";
import { isNil } from "ramda";

export class GetUserService implements GetUserRepository {
  constructor(private readonly getUserRepository: GetUserRepository) {}
  getUser({
    id,
    email,
  }: {
    id?: string | undefined;
    email?: string | undefined;
  }): Promise<UserEntity | null> {
    if (isNil(id) && isNil(email)) throw new Error("Authentication failed");

    if (!isNil(id)) {
      return this.getUserRepository.getUser({ id });
    } else {
      return this.getUserRepository.getUser({ email });
    }
  }
}
