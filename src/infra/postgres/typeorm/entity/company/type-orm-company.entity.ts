import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TypeOrmLocation } from "../location/type-orm-location.entity";
import { TypeOrmUser } from "../user/type-orm-user.entity";

@Entity("Company")
export class TypeOrmCompany {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  cnpj: string;

  @ManyToOne((type) => TypeOrmUser, { onDelete: "CASCADE" })
  user: TypeOrmUser;

  @OneToMany((type) => TypeOrmLocation, (location) => location.company)
  locations: TypeOrmLocation[];
}
