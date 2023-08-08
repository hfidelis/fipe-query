import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { environment } from 'src/environments/environment.development';

import { FipePattern } from '../models/FipePattern';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  private readonly baseApiUrl: string = environment.baseApiUrl

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getBrands(type: string): Observable<Array<FipePattern>> {
    const url: string = `${this.baseApiUrl}${type}/marcas`;
    return this.http.get<Array<FipePattern>>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        this.messageService.add(`Erro: [${err.name} : ${err.status}] ao carregar marcas, tente novamente mais tarde.`)
        return of([])
      })
    );
  }

  getModels(type: string, brandCode: string): Observable<Array<FipePattern>> {
    const url: string = `${this.baseApiUrl}${type}/marcas/${brandCode}/modelos`;
    return this.http.get<any>(url).pipe(
      map(data => data.modelos),
      catchError((err: HttpErrorResponse) => {
        this.messageService.add(`Erro [${err.name}: ${err.status}] ao carregar modelos, tente novamente mais tarde.`)
        return of([])
      })
    );
  }

  getModelYears(type: string, brandCode: string, modelCode: string): Observable<Array<FipePattern>> {
    const url: string = `${this.baseApiUrl}${type}/marcas/${brandCode}/modelos/${modelCode}/anos`;
    return this.http.get<Array<FipePattern>>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        this.messageService.add(`Erro [${err.name}: ${err.status}] ao carregar anos, tente novamente mais tarde.`)
        return of([])
      })
    );
  }

  getModelDetails(type: string, brandCode: string, modelCode: string, yearCode: string): Observable<Vehicle> {
    const url: string = `${this.baseApiUrl}${type}/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`;
    return this.http.get<Vehicle>(url).pipe(
      catchError((err: HttpErrorResponse) => {
        this.messageService.add(`Erro [${err.name}: ${err.status}] ao carregar detalhes, tente novamente mais tarde.`)
        return of({} as Vehicle)
      })
    );
  }

}
