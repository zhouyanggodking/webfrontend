import { TestBed, inject } from '@angular/core/testing';

import { RxjsDemoService } from './rxjs-demo.service';

describe('RxjsDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsDemoService]
    });
  });

  it('should be created', inject([RxjsDemoService], (service: RxjsDemoService) => {
    expect(service).toBeTruthy();
  }));
});
