import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../core/auth-service.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private AuthService:AuthServiceService) { }

  public currentUser: User;

  ngOnInit() {

    if(this.AuthService.IsAuthenticated())
    {
      this.currentUser = this.AuthService.GetUserInfo();
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  public onLogout()
  {
    this.AuthService.Logout();
    this.router.navigate(['/login']);
  }
}
