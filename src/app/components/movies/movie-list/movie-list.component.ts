import { Component, OnInit } from '@angular/core';

import { faTrashAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons';

import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  trashAlt = faTrashAlt
  penAlt = faPenAlt

  movies: Movie[] = [];

  constructor(
    private movieService: MoviesService, 
  ) { }

  ngOnInit(): void {
    this.onGetMovies();
  }

  onGetMovies() {
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      console.log(movies);
    }, error => {
      console.log(error);
    })
  }

}
