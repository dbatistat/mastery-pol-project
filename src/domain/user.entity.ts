import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { JoinColumn } from 'typeorm/decorator/relations/JoinColumn';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  username: string;

  @Column({ length: 255, nullable: false })
  password: string;

  @Column({ length: 255, nullable: false })
  email: string;

  @ManyToOne(type => Role, {nullable: false})
  @JoinColumn({name: 'role_id'})
  role: Role;
}
