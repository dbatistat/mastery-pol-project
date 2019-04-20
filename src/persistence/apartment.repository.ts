import { EntityRepository, Repository } from 'typeorm';
import { Apartment } from '../domain/apartment.entity';

@EntityRepository(Apartment)
export class ApartmentRepository extends Repository<Apartment> {}
