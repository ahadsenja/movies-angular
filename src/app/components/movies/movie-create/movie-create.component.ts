import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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

  createMovieForm = new FormGroup({});

  constructor(
    private movieService: MoviesService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.createMovieForm = this.formBuilder.group({
      title: [''],
      author: [''],
      year: [null],
      genre: [''],
      published: [false],
      image: [''],
    })
   }

   onSelectedFile(event: any) {
     const file = event.target.files[0];
     this.createMovieForm.patchValue({
       image: file
     })
     this.createMovieForm.get('image')?.updateValueAndValidity;
   }

  ngOnInit(): void {
  }

  onCreateMovie(): void {
    let formData: any = new FormData();
    formData.append('title', this.createMovieForm.get('title')?.value)
    formData.append('author', this.createMovieForm.get('author')?.value)
    formData.append('year', this.createMovieForm.get('year')?.value)
    formData.append('genre', this.createMovieForm.get('genre')?.value)
    formData.append('image', this.createMovieForm.get('image')?.value)

    this.movieService.create(formData).subscribe(response => {
      console.log(response)
      this.submitted = true
    })

    this.router.navigate(['/movies']);
  }

  onCancel() {
    this.id = 0;
    this.title = '';
    this.author = '';
    this.year = 0;
    this.genre = '';
    this.published = false;
    this.image = '';
    this.router.navigate(['/movies'])
  }

}
