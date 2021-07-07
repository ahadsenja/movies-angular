import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  BASE_URL = 'https://movie-api-sample.herokuapp.com'

  movies: Movie[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.BASE_URL}/api/v1/movie/movies`);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.BASE_URL}/api/v1/movie/movies`, movie);
  }

  delete(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.BASE_URL}/api/v1/movie/movies/${movie.id}`)
  }
}
