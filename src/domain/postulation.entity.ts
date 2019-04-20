import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Convocation } from './convocation.entity';

@Entity({ name: 'postulations' })
export class Postulation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  fullname: string;

  @Column({ length: 15, nullable: false })
  ci: string;

  @Column({ length: 255, nullable: false })
  email: string;

  @Column({ name: 'postulation_date', type: 'datetime', nullable: false })
  postulationDate: Date;

  @Column({ name: 'born_date', type: 'datetime', nullable: false })
  bornDate: Date;

  @Column({ name: 'born_place', length: 255, nullable: false })
  bornPlace: string;

  @Column({ length: 255, nullable: false })
  urlCv: string;

  @ManyToOne(type => Convocation, { nullable: false })
  @JoinColumn({ name: 'convocation_id' })
  convocation: Convocation;
}
