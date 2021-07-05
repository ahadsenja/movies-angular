import { Component, OnInit } from '@angular/core';

import { faTachometerAlt, faDatabase, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tachometer = faTachometerAlt
  database = faDatabase
  signOut = faSignOutAlt

  constructor() { }

  ngOnInit(): void {
  }

}
