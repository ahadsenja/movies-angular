import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  isLoggedIn = false;

  constructor(
    private auth: AuthService,
    private token: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.form)
    if(this.token.getToken()) {
      this.isLoggedIn = true
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.auth.login(username, password).subscribe(data => {
      this.token.saveUser(data);
      this.router.navigate(['/dashboard']);
      console.log('Login Success');
    })
  }
}
