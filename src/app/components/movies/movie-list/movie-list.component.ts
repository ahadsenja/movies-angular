import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';

import { 
  faTrashAlt, 
  faPenAlt, 
  faPlusSquare, 
  faEye, 
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  trashAlt = faTrashAlt
  penAlt = faPenAlt
  plusSquare = faPlusSquare
  eye = faEye
  search = faSearch

  movies: Movie[] = [];

  searchText: string = '';

  constructor(
    private movieService: MoviesService,
    private router: Router
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

  onDeleteMovie(movie: Movie): void {
    this.movieService.delete(movie).subscribe(response => {
      this.movies = this.movies.filter(id => id !== movie);
      console.log(response);
    })
  }

  onSelectedMovie(id: number): void {
    this.router.navigate(['/movies/edit', id])
  }

}
