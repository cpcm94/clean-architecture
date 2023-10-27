import { UserEntity } from "@/domain/entities/user.entity";
import { TypeOrmUser } from "./type-orm-user.entity";

export class TypeOrmUserMapper {
  public static toOrmEntity(domainUser: UserEntity): TypeOrmUser {
    const ormUser: TypeOrmUser = new TypeOrmUser();

    ormUser.id = domainUser.id;
    ormUser.email = domainUser.email;
    ormUser.name = domainUser.name;
    ormUser.password = domainUser.password;
    ormUser.salt = domainUser.salt;

    return ormUser;
  }

  public static toOrmEntities(domainUsers: UserEntity[]): TypeOrmUser[] {
    return domainUsers.map((domainUsers) => this.toOrmEntity(domainUsers));
  }

  public static toDomainEntity(ormUser: TypeOrmUser): UserEntity {
    return {
      id: ormUser.id,
      email: ormUser.email,
      name: ormUser.name,
      password: ormUser.password,
      salt: ormUser.salt,
      companies: ormUser.companies,
    };
  }

  public static toDomainEntities(ormUsers: TypeOrmUser[]): UserEntity[] {
    return ormUsers.map((ormUsers) => this.toDomainEntity(ormUsers));
  }
}
