import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../core/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthServiceService) { }
  model: any = {};

  ngOnInit() {
  }

  onLoginInit()
  {
    var login = this.model.login;
    var pass = this.model.password;
    console.log("login: " + login + "; password: " + pass);
    this.AuthService.Login(login, pass);
    this.router.navigate(['/courses']);
  }

}
