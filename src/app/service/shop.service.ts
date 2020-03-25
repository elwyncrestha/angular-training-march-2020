import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstant} from '../constant/AppConstant';
import {Shop} from '../model/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  URL = 'v1/shop';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any> {
    const api = `${AppConstant.SERVER_URL}${this.URL}/all`;
    return this.http.get(api);
  }

  public save(model: Shop): Observable<any> {
    const api = `${AppConstant.SERVER_URL}${this.URL}`;
    return this.http.post(api, model);
  }

  public delete(id: number): Observable<any> {
    const api = `${AppConstant.SERVER_URL}${this.URL}/${id}`;
    return this.http.delete(api);
  }
}
