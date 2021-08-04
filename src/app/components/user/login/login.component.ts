import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  }

  isLoggedIn = true

  constructor(
    private auth: AuthService,
    private token: TokenStorageService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log(this.form)
    if(this.token.getToken() !== null) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    this.login();
  }

  login() {
    const { username, password } = this.form;

    if (username !== '' && password !== '') {
      this.auth.login(username, password).subscribe(data => {
        this.isLoggedIn = true;
        this.token.saveUser(data);
        this.location.replaceState('/dashboard');
        window.location.reload();
      })
    }
  }
}
