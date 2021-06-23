import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const LOGIN_API = 'https://movie-api-sample.herokuapp.com/api/v1/user/login';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.http.get(LOGIN_API);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(LOGIN_API, {username, password}, httpOptions);
  }
}
