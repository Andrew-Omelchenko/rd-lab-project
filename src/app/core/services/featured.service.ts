import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../constants/config';

@Injectable()
export class FeaturedService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<any> {
    return this.httpClient.get(`${API.BASE_URL}${API.ENDPOINTS.FEATURED}`);
  }
}
