import { Injectable } from "@angular/core";

@Injectable()

export class Api {
 public readonly GETALL_ENDPOINT: string = 'https://movie-api-sample.herokuapp.com/api/v1/movie/movies';
 public readonly CREATE_ENDPOINT: string = 'https://movie-api-sample.herokuapp.com/api/v1/movie/movies';
 public readonly UPDATE_ENDPOINT: string = 'https://movie-api-sample.herokuapp.com/api/v1/movie/movies';
 public readonly DELETE_ENDPOINT: string = 'https://movie-api-sample.herokuapp.com/api/v1/movie/movies';
 public readonly GETBYID_ENDPOINT: string = 'https://movie-api-sample.herokuapp.com/api/v1/movie/movies';
}
