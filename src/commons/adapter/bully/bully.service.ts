import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BullyData } from './bully.data';
import { AxiosResponse } from 'axios';

@Injectable()
export class BullyAdapter {
  constructor(private readonly httpService: HttpService) {
  }

  getByCi(ci: string): Observable<AxiosResponse<BullyData[]>> {
    return this.httpService.get('http://localhost:3001/api/bully');
  }
}
