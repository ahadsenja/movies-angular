import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  @Input() modal_title: any;
  @Input() modal_content: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
}
