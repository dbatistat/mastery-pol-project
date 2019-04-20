import { Injectable } from '@nestjs/common';
import { ApartmentService } from './apartment.service';

@Injectable()
export class ApartmentImplService implements ApartmentService{}
