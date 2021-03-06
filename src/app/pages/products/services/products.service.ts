import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../../../core/constants/config';
import {Product} from './product.model';

@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API.BASE_URL}${API.ENDPOINTS.PRODUCTS}`);
  }
}
