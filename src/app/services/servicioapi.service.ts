import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTs } from '../models/user-ts';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioapiService {

  constructor(private http: HttpClient) { }

  // metodo get
  getVista():Observable<UserTs[]>{
    let retu1 = environment.apiUrl + 'users/';
    return this.http.get<UserTs[]>(retu1)
  }
}
