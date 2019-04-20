import { Injectable } from '@nestjs/common';
import { ConvocationService } from './convocation.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Convocation } from '../../domain/convocation.entity';

@Injectable()
export class ConvocationImplService implements ConvocationService {
  constructor(
    @InjectRepository(Convocation)
    private readonly convocationRepository: Repository<Convocation>,
  ) {
  }

  async getById(id: number): Promise<Convocation> {
    return await this.convocationRepository.findOne(id);
  }

  async existById(id: number): Promise<boolean> {
    const convocation = await this.getById(id);
    return !!convocation;
  }
}
