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
      isLoggedIn: false,
      name: 'test'
    };

    TestBed.configureTestingModule({
      providers: [AuthGuard, {
        provide: Router, useValue: fakeRouter
      }, {
        provide: AuthService, useValue: fakeAuthService
      }]
    });
  });

  it('if not logged in, can\'t activate component', inject([AuthGuard, Router, AuthService], (guard: AuthGuard, router, authService) => {
    let route: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    //how to mock RouterStateSnapshot
    let state:RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>("RouterStateSnapshot", ['toString']);
    spyOn(fakeRouter, 'navigate');
    
    state.url = 'redirectUrl';
    let result = guard.canActivate(route, state);
    expect(result).toBeFalsy();
  }));

  it('if logged in, can activate component', inject([AuthGuard, Router, AuthService], (guard: AuthGuard, router, authService) => {
    let route: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    //how to mock RouterStateSnapshot
    let state:RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>("RouterStateSnapshot", ['toString']);
    spyOn(fakeRouter, 'navigate');
    
    authService.isLoggedIn = true;
    
    state.url = 'redirectUrl';
    let result = guard.canActivate(route, state);
    expect(result).toBeTruthy();
  }));

  it('CanLoad', inject([AuthGuard, Router, AuthService], (guard: AuthGuard, router, authService) => {
    let result = guard.canLoad(null);
    expect(result).toBeTruthy();
  }));
});
