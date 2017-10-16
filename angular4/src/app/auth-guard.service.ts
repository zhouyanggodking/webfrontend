import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{

  constructor(private router: Router, private authService: AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('AuthGuard#canActivate called');

    let url: string = state.url;
    return this.checkLogin(url);
  }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('AuthGuard#canActivateChild called');
    return true;
  }
  
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  private checkLogin(url: string): boolean{
    if(this.authService.isLoggedIn){
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
  
}
