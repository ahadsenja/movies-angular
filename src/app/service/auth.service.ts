import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { TokenStorageService } from './token-storage.service';

const LOGIN_API = 'https://movie-api-sample.herokuapp.com/api/v1/user/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  isAuthenticated() {
    return this.http.get(LOGIN_API);  
  }

  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(LOGIN_API, {username, password}, httpOptions).pipe(map(token => {
      this.token.saveToken(JSON.stringify(token));
    }));
  }  
}
