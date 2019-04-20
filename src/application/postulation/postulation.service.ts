import { CreatePostulation } from './api/create-postulation';
import { Postulation } from '../../domain/postulation.entity';

export interface PostulationService {
  getAll(): Promise<Postulation[]>;
  register(data: CreatePostulation): Promise<Postulation>;
}
