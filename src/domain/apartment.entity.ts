import { Employee } from './employee.entity';
import { JoinTable } from 'typeorm/decorator/relations/JoinTable';
import { ManyToMany } from 'typeorm/decorator/relations/ManyToMany';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Column } from 'typeorm/decorator/columns/Column';

@Entity({name: 'apartments'})
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  name: string;

  @ManyToMany(type => Employee)
  @JoinTable()
  employees: Employee[];
}
