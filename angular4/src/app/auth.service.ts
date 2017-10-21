import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { User } from './model/user';
import { LoggerService } from './components/logger/logger.service';

@Injectable()
export class AuthService{
  
  isLoggedIn: boolean;
  redirectUrl: string;
  userCollections: User[]

  constructor() { 
    this.userCollections = [{
      userName: 'godking',
      password: 'godking'
    }]
  }

  login(userName: string, password: string): Observable<boolean>{
    var logged = this.userCollections.filter(user => user.userName === userName && user.password === password).length > 0;
    //this._logger.log(`User: ${userName} log in status: ${logged}`);
    return Observable.of(logged).do(valid => this.isLoggedIn = valid);
  }

  logout(){
    this.isLoggedIn = false;
  } 

}
