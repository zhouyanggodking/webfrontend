import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate{
  canDeactivate: ()=>Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor() { }

  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean |  Promise<boolean> {
    return component.canDeactivate();
  }

}
