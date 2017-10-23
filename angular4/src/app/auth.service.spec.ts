import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LoggerService } from './components/logger/logger.service';

describe('LoginService', () => {
  let service : AuthService;
  let logger = new LoggerService;
  beforeEach(() => {
    logger = new LoggerService();
    service = new AuthService(logger);

    spyOn(logger, 'log');
  });

  it('godking should log in successfully with right password', (done: DoneFn)=>{
    service.login('godking', 'godking').subscribe(val =>{
      expect(logger.log).toHaveBeenCalled();

      expect(val).toBeTruthy();
      done();
    });
    expect(service.isLoggedIn).toBeTruthy();
  });

  it('godking should log in unsuccessfully with wrong password', (done: DoneFn)=>{
    service.login('godking', 'wrongpwd').subscribe(val =>{
      expect(logger.log).toHaveBeenCalled();

      expect(val).toBeFalsy();

      done();      
    });

    expect(service.isLoggedIn).toBeFalsy();
  });

  it('should logout susuccessfully', ()=>{
    service.logout();
    expect(service.isLoggedIn).toBeFalsy();
  });
});
