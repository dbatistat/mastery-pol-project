import { EntityRepository, Repository } from 'typeorm';
import { Convocation } from '../domain/convocation.entity';

@EntityRepository(Convocation)
export class ConvocationRepository extends Repository<Convocation> {}
