import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faTachometerAlt, faDatabase, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tachometer = faTachometerAlt
  database = faDatabase
  signOut = faSignOutAlt

  isLoggedIn = false;

  constructor(
    private token: TokenStorageService, 
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();
  }

  doLogout(): void {
    this.token.logout();
    this.location.replaceState('/login');
    window.location.reload();
  }

}
