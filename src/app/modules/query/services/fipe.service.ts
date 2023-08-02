import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor(
    private http: HttpClient
  ) { }
  
}
