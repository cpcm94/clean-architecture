import {
  CreateUserRepository,
  GenerateUserDto,
} from "@/application/repositories/user/create-user-repository";
import { Repository } from "typeorm";
import { TypeOrmUser } from "../../entity/user/type-orm-user";

export class TypeOrmUserRepository
  extends Repository<TypeOrmUser>
  implements CreateUserRepository
{
  async createUser(createUserDto: GenerateUserDto): Promise<{ id: string }> {
    const savedUser = await this.save(createUserDto);

    return { id: savedUser.id };
  }
}
