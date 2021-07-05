import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from 'src/app/service/movies.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  movies: Movie[] = [];

  id: number = 0;
  title: string = '';
  author: string = '';
  year: number = 0;
  genre: string = '';
  published: boolean = false;
  image: string = '';

  submitted = false;

  constructor(
    private movieService: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // handleFileInput(files: FileList) {
  //   this.image = files.item(0);
  // }

  onCreateMovie(): void {
    const data = {
      id: this.id,
      title: this.title,
      author: this.author,
      year: this.year,
      genre: this.genre,
      published: this.published,
      image: this.image
    }

    this.movieService.create(data).subscribe(response => {
      console.log(response)
      this.submitted = true
    })
    this.router.navigate(['/movies']);
  }


}
