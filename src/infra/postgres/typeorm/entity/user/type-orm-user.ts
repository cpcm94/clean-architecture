import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TypeOrmCompany } from "../company/type-orm-company";

@Entity()
export class TypeOrmUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany((type) => TypeOrmCompany, (company) => company.user)
  companies: TypeOrmCompany[];
}
