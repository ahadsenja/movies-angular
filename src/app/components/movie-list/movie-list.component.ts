import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MoviesService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  onGetMovies() {
    // const headers = new HttpHeaders().set('Authorization', `Token ${this.token.getToken()}`);
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      console.log(movies);
    }, error => {
      console.log(error);
    })
  }

}
