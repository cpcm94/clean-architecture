import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypeOrmCompany } from "../company/type-orm-company.entity";

@Entity("Location")
export class TypeOrmLocation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  neighborhood?: string;

  @Column({ nullable: true })
  street?: string;

  @Column({ nullable: true })
  number?: string;

  @ManyToOne((type) => TypeOrmCompany, (company) => company.locations, {
    onDelete: "CASCADE",
  })
  company: TypeOrmCompany;
}
