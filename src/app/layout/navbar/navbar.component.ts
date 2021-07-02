import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private token: TokenStorageService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
  }

  doLogout(): void {
    this.token.logout();
    this.router.navigate(['/login']);
    window.location.reload();
  }

}
