import { CreateUserRepository } from "@/application/repositories/user/create-user-repository";
import { CreateUserDto } from "@/application/dto/user/create-user.dto";
import { UserDto } from "@/application/dto/user/user";
import { UserEntity } from "@/domain/entities/user.entity";
import * as bcrypt from "bcryptjs";

export interface CreateUser {
  create: (user: UserEntity) => Promise<{ id: string }>;
}

export class CreateUserService implements CreateUser {
  constructor(private readonly createUserRepository: CreateUserRepository) {}
  async create({
    name,
    email,
    password,
  }: CreateUserDto): Promise<{ id: string }> {
    // test props
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    return this.createUserRepository.createUser({
      email,
      name,
      password: hashPassword,
      salt,
    });
  }
}
