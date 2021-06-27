import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  BASE_URL = 'https://movie-api-sample.herokuapp.com'

  movies: Movie[] = [];

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  getAll(): Observable<Movie[]> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.token.getToken()}` 
      })
    }
    return this.http.get<Movie[]>(`${this.BASE_URL}/api/v1/movie/movies`, httpOptions);
  }
}
