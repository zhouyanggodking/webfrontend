import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';
import { ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthGuardService', () => {

  // let router: Router;
  // let route: ActivatedRoute;
  // let state: RouterStateSnapshot;
  // let authService: AuthService;

  // let guard: AuthGuard;

  let fakeRouter;
  let fakeAuthService;

  beforeEach(() => {
    fakeRouter = {
      navigate(url){

      }
    };

    fakeAuthService = {
      isLoggedIn: false
    }

    TestBed.configureTestingModule({
      providers: [AuthGuard, {
        provide: Router, useValue: fakeRouter
      }, {
        provide: AuthService, useValue: fakeAuthService
      }]
    });
  });

  xit('if not logged in, can\'t activate component', inject([AuthGuard, Router, AuthService], (guard: AuthGuard, router, authService) => {
    let route: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    
    let state: RouterStateSnapshot = new RouterStateSnapshot(null);//TODO
    state.url = 'redirectUrl';
    let result = guard.canActivate(route, state);
    expect(result).toBeFalsy();
    expect(fakeAuthService.redirectUrl).toBe('redirectUrl');
  }));
});
