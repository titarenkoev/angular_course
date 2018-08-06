import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  private token:string = "how_to_create_new_token_easy";

  public Login(username: string, password: string) {

    if(username && password)
    {
      var user:User = {
        id:1,
        firstName: username,
        lastName: ''
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', this.token);
    console.log("Login Service, Login. Token:" + this.token + "; username: " + username);
  }
  }

  public Logout ()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  public IsAuthenticated() : boolean
  {
    if(localStorage.getItem('token') !== null)
    {
      console.log("Login Service. IsAuthenticated: true");
      return true;
    }
    console.log("Login Service. IsAuthenticated: false");
    return false;
  }

  public GetUserInfo() : User{
    if(localStorage.getItem('currentUser') !== null)
    {
      console.log("Login Service. GetUserInfo - not null");
      var user:User = JSON.parse(localStorage.getItem('currentUser'));
      return user;
    }
    console.log("Login Service. GetUserInfo - null");
    return null;
  }
}
