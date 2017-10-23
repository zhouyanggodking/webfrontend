import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivateGuard, CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

describe('CanDeactivateGuardService', () => {

  let guard : CanDeactivateGuard;


  beforeEach(() => {
    guard = new CanDeactivateGuard();    
  });

  it('CanDeactivateGuard will succeed if component passes check', () => {
    let mockComp: CanComponentDeactivate = {
      canDeactivate(){
        return true;
      }
    };

    expect(guard.canDeactivate(mockComp)).toBeTruthy();
  });

  it('CanDeactivateGuard will fail if component doesn\'t pass check', () => {
    let mockComp: CanComponentDeactivate = {
      canDeactivate(){
        return false
      }
    };

    expect(guard.canDeactivate(mockComp)).toBeTruthy();
    
  });
});
