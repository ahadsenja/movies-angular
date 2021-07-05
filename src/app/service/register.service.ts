import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { Observable } from 'rxjs';

const REGISTER_URL = 'https://movie-api-sample.herokuapp.com/api/v1/user/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  user: User[] = [];

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<User>(REGISTER_URL, user, httpOptions);
  }
}
