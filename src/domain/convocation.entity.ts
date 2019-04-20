import { Apartment } from './apartment.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'convocations' })
export class Convocation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Apartment, { nullable: false })
  @JoinColumn({ name: 'apartment_id' })
  apartment: Apartment;

  @Column({ nullable: false })
  quota: number;

  @Column({ name: 'start_date', type: 'datetime', nullable: false })
  startDate: Date;

  @Column({ name: 'end_date', type: 'datetime', nullable: false })
  endDate: Date;

}
