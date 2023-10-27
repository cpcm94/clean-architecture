import { CreateUserService } from "@/application/services/user/create-user";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}
  @Post()
  async create(@Body() createUserDto: CreateUserDTO) {
    return await this.createUserService.create(createUserDto);
  }
}
