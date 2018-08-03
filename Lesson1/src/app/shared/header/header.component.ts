import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../core/auth-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthService:AuthServiceService) { }

  public currentUser: User;

  ngOnInit() {
    //this.AuthService.CreateFakeUser();//TEMPORARY for task!!!

    if(this.AuthService.IsAuthenticated())
    {
      this.currentUser = this.AuthService.GetUserInfo();
    }
  }

  public onLogout()
  {
    this.AuthService.Logout();
  }
}
