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

  getAll(API_URL: string): Observable<any> {
    return this.http.get<Movie[]>(API_URL);
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.BASE_URL}/api/v1/movie/movies`, movie);
  }

  delete(movie: Movie): Observable<Movie> {
    return this.http.delete<Movie>(`${this.BASE_URL}/api/v1/movie/movies/${movie.id}`)
  }

  update(id: number, movie: Movie): Observable<Object> {
    return this.http.put(`${this.BASE_URL}/api/v1/movie/movies/${id}`, movie);
  }

  getById(id: number): Observable<Movie> {
      return this.http.get<Movie>(`${this.BASE_URL}/api/v1/movie/movies/${id}`);
  }
}
