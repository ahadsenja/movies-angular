import { Component } from '@angular/core';

import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-angular';

  isLoggedIn = false;
  showNavbar = false;
  showSidebar = false;

  constructor(
    private token: TokenStorageService
  ){}

  ngOnInit() {
    if (this.token.getToken() !== null) {
      this.isLoggedIn = true;
      const token = this.token.getToken()
      console.log(token)
    }
  }
}
