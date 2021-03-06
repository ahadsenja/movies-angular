import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';
import { MoviesDetailComponent } from '../movies-detail/movies-detail.component';

import { Api } from 'src/app/config/api/api';

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

  title = 'Movie Detail';
  closeResult: string = '';
  modalOptions: NgbModalOptions;

  trashAlt = faTrashAlt
  penAlt = faPenAlt
  plusSquare = faPlusSquare
  eye = faEye
  search = faSearch

  movies: Movie[] = []

  searchText: string = ''

  moviesUrl = 'https://movie-api-sample.herokuapp.com/api/v1/movie/movies'
  next: string = ''
  previous: string = ''
  // p: number = 1;
  // pageCount: number = 10;

  constructor(
    private movieService: MoviesService,
    private router: Router,
    private modalService: NgbModal
  ) { 
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.onGetMovies(this.moviesUrl);
    console.log(Api)
  }

  onGetMovies(url: string) {
    this.movieService.getAll(url).subscribe(movies => {
      this.movies = movies.results
      if (movies.next) {
        this.next = movies.next
      }

      if (movies.previous) {
        this.previous = movies.previous
      }
      console.log(movies);
    }, error => {
      console.log(error);
    })
  }

  fetchNext() {
    this.onGetMovies(this.next)
  }

  fetchPrevious() {
    this.onGetMovies(this.previous)
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

  open(id: number) {
    const modalRef = this.modalService.open(MoviesDetailComponent);
    modalRef.componentInstance.modal_title = 'Movie Detail';
    modalRef.componentInstance.modal_content = this.movieService.getById(id).subscribe(data => {
      console.log(data)
    });
  }
}
