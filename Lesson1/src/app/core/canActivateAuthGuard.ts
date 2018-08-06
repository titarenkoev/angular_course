import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthServiceService } from '../core/auth-service.service';


@Injectable({
    providedIn: 'root'
  })

  export class canActivateAuthGuard implements CanActivate{
      constructor(private AuthService: AuthServiceService){
      }

      canActivate(){
          return this.AuthService.IsAuthenticated();
      }
  }