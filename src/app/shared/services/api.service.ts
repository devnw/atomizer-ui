import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { IAlive } from '../models/Alive';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  appid(): Observable<string> {
    return this.http.get<string>('http://localhost:3000/api/appid');
  }

  atomizerAlive(): Observable<IAlive> {
    return this.http.get<IAlive>('http://localhost:3000/api/atomizer-alive');
  }
}
