import { Component, OnInit } from '@angular/core';

import { RegisterService } from 'src/app/service/register.service';
import { User } from 'src/app/models/user';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: User[] = [];

  id: number = 0;
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  
  submitted: boolean = false;

  constructor(
    private registerService: RegisterService,
    private token: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    const data = {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    this.registerService.register(data).subscribe(response => {
      this.token.saveUser(response)
      console.log(response)
      this.submitted = true
    })
  }

}
