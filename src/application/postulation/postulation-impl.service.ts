import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostulationService } from './postulation.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Postulation } from '../../domain/postulation.entity';
import { Repository } from 'typeorm';
import { CreatePostulation } from './api/create-postulation';
import { ConvocationImplService } from '../convocation/convocation-impl.service';
import { PostulationRepository } from '../../persistence/postulation.repository';
import { BullyAdapter } from '../../commons/adapter/bully/bully.service';
import { QueuingAdapter } from '../../commons/adapter/queuing/queuing.service';

@Injectable()
export class PostulationImplService implements PostulationService {
  constructor(
    private readonly postulationRepository: PostulationRepository,
    private readonly convocationService: ConvocationImplService,
    private readonly bullyAdapter: BullyAdapter,
    private readonly queuingAdapter: QueuingAdapter,
  ) {
  }

  async register(data: CreatePostulation): Promise<Postulation> {

    const convocation = await this.convocationService.getById(data.convocationId);
    if (!convocation) {
      throw new HttpException('Convocation dont exist', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    const byllyData = await this.bullyAdapter.getByCi(data.ci).toPromise();
    const queuingData = await this.queuingAdapter.sendPostulation(data).toPromise();
    return await this.postulationRepository.save( {
      id: null,
      ci: data.ci,
      convocation,
      bornDate: new Date(data.bornDate),
      bornPlace: data.bornPlace,
      email: data.email,
      fullname: data.fullname,
      postulationDate: new Date(),
      urlCv: data.urlCv,
    });
  }

  async getAll(): Promise<Postulation[]> {
    return await this.postulationRepository.find();
  }
}
