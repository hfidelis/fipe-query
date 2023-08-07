import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { FipePattern } from '../models/FipePattern';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  private readonly baseApiUrl: string = environment.baseApiUrl

  constructor(
    private http: HttpClient
  ) { }

  getBrands(type: string): Observable<Array<FipePattern>> {
    const url: string = `${this.baseApiUrl}${type}/marcas`;
    return this.http.get<Array<FipePattern>>(url);
  }

  getModels(type: string, brandCode: string): Observable<Array<FipePattern>> {
    const url: string = `${this.baseApiUrl}${type}/marcas/${brandCode}/modelos`;
    return this.http.get<any>(url).pipe(
      map(data => data.modelos)
    );
  }

  getModelYears(type: string, brandCode: string, modelCode: string): Observable<Array<FipePattern>> {
    const url: string = `${this.baseApiUrl}${type}/marcas/${brandCode}/modelos/${modelCode}/anos`;
    return this.http.get<Array<FipePattern>>(url);
  }

  getModelDetails(type: string, brandCode: string, modelCode: string, yearCode: string): Observable<Vehicle> {
    const url: string = `${this.baseApiUrl}${type}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`;
    return this.http.get<Vehicle>(url);
  }

}
