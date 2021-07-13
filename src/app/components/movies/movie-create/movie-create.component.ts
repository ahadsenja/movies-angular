import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  movieFormGroupCreate = new FormGroup({});

  constructor(
    private movieService: MoviesService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.movieFormGroupCreate = this.formBuilder.group({
      title: [''],
      author: [''],
      year: [null],
      genre: [''],
      published: [false],
      image: [null],
    })
  }

  onSelectedFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.movieFormGroupCreate.get('image')?.setValue(file);
    }
  }

  ngOnInit(): void {
  }

  onCreateMovie(): void {
    let formData: any = new FormData();
    formData.append('title', this.movieFormGroupCreate.get('title')?.value)
    formData.append('author', this.movieFormGroupCreate.get('author')?.value)
    formData.append('year', this.movieFormGroupCreate.get('year')?.value)
    formData.append('genre', this.movieFormGroupCreate.get('genre')?.value)
    formData.append('published', this.movieFormGroupCreate.get('published')?.value)
    formData.append('image', this.movieFormGroupCreate.get('image')?.value)

    this.movieService.create(formData).subscribe(response => {
      console.log(response)
      this.submitted = true
    })

    this.router.navigate(['/movies']);
  }

  onCancel() {
    this.router.navigate(['/movies']);
  }

}
