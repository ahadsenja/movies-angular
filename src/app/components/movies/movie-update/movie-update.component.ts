import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  movies: Movie[] = [];
  movie: Movie = new Movie();

  id: number = 0;
  submitted = false;

  movieFormGroupUpdate = new FormGroup({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MoviesService,
    public formBuilder: FormBuilder
  ) {
    this.movieFormGroupUpdate = this.formBuilder.group({
      title: [''],
      author: [''],
      year: [null],
      genre: [''],
      published: [true],
      image: [null],
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.getById(this.id).subscribe(data => {
      this.movie = data;
      this.movieFormGroupUpdate.patchValue({
        title: data.title,
        author: data.author,
        year: data.year,
        genre: data.genre,
        image: data.image
      })
    })
  }

  onSelectedFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.movieFormGroupUpdate.get('image')?.setValue(file);
    }
  }

  onUpdateMovie() {
    let formData: any = new FormData();
    formData.append('title', this.movieFormGroupUpdate.get('title')?.value)
    formData.append('author', this.movieFormGroupUpdate.get('author')?.value)
    formData.append('year', this.movieFormGroupUpdate.get('year')?.value)
    formData.append('genre', this.movieFormGroupUpdate.get('genre')?.value)
    formData.append('published', this.movieFormGroupUpdate.get('published')?.value)
    formData.append('image', this.movieFormGroupUpdate.get('image')?.value)

    this.movieService.update(this.id, formData).subscribe(data => {
      console.log(data)
      this.submitted = true
      this.router.navigate(['/movies'])
    }, error => console.log(error))
  }

  onCancel() {
    this.router.navigate(['/movies']);
  }
}
