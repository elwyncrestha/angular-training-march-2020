import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstant} from '../constant/AppConstant';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  URL = 'v1/shop';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    const api = `${AppConstant.SERVER_URL}${this.URL}`;
    return this.http.get(`${api}/all`);
  }
}
