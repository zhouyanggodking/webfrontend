import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  protected _logEntries: string[] = [];
  private _name: string;

  constructor() { 
    this._name = "Logger" + Math.random();
  }

  log(message: string): void{
    this._logEntries.push(message);
    console.log(this._name + ':' + message + ' ');
  }
}
