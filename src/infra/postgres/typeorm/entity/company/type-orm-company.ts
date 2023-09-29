import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TypeOrmLocation } from "../location/type-orm-location";
import { TypeOrmUser } from "../user/type-orm-user";

@Entity()
export class TypeOrmCompany {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  cnpj: number;

  @ManyToOne((type) => TypeOrmUser, { onDelete: "CASCADE" })
  user: TypeOrmUser;

  @OneToMany((type) => TypeOrmLocation, (location) => location.company)
  locations: TypeOrmLocation[];
}
