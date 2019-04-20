import { EntityRepository, Repository } from 'typeorm';
import { Postulation } from '../domain/postulation.entity';

@EntityRepository(Postulation)
export class PostulationRepository extends Repository<Postulation> {
}
