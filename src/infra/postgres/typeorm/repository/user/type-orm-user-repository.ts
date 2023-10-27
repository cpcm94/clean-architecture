import { UserDto } from "@/application/dto/user/user";
import {
  GenerateUserDto,
  UserRepository,
} from "@/application/repositories/user/user-repository";
import { isNil } from "ramda";
import { Repository } from "typeorm";
import { TypeOrmUser } from "../../entity/user/type-orm-user.entity";
import { TypeOrmUserMapper } from "../../entity/user/type-orm-user-mapper";

export class TypeOrmUserRepository implements UserRepository {
  constructor(private readonly userRepository: Repository<TypeOrmUser>) {}
  async createUser(createUserDto: GenerateUserDto): Promise<{ id: string }> {
    const savedUser = await this.userRepository.save(createUserDto);

    return { id: savedUser.id };
  }

  async getUser({
    id,
    email,
  }: {
    id?: string;
    email?: string;
  }): Promise<UserDto | null> {
    const query = this.userRepository.createQueryBuilder("user");
    if (!isNil(id)) {
      query.where("user.id = :id", { id });
    }

    if (!isNil(email)) {
      query.where("user.email = :email", { email });
    }

    const ormUser = await query.getOne();

    if (isNil(ormUser)) return null;

    return TypeOrmUserMapper.toDomainEntity(ormUser);
  }
}
