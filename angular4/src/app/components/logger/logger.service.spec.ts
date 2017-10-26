import { TestBed, inject } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {

  let logger: LoggerService;

  beforeEach(() => {
    logger = new LoggerService();
  });

  it('should be created', ()=>{
    spyOn(console, 'log');
    logger.log('msg');
    expect(console.log).toHaveBeenCalled();
  });
});
