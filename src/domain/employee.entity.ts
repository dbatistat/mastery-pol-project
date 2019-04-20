import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'employees'})
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 255, nullable: false})
  fuullname: string;

  @Column({length: 255, nullable: false})
  email: string;
}
