import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { QueuingData } from './queuing.data';

@Injectable()
export class QueuingAdapter {
  constructor(private readonly httpService: HttpService) {
  }

  sendPostulation(data: any): Observable<AxiosResponse<QueuingData[]>> {
    return this.httpService.post('http://localhost:3001/api/queuing');
  }
}
