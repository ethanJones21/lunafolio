import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../interfaces/info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Info[]>{
    return this.http.get<Info[]>('assets/data/info.json');
  }
}
