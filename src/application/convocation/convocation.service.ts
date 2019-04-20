import { Convocation } from '../../domain/convocation.entity';

export interface ConvocationService {
  getById(id: number): Promise<Convocation>;

  existById(id: number): Promise<boolean>;
}
