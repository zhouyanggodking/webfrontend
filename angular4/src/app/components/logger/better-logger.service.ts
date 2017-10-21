import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class BetterLoggerService extends LoggerService {

  constructor() {
    super();
  }

  output(){
    for(let msg of this._logEntries){
      console.log(msg);
    }
  }
}
