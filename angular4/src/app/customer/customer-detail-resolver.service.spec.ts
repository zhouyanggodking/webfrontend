import { TestBed, inject } from '@angular/core/testing';

import { CustomerDetailResolver } from './customer-detail-resolver.service';

describe('CustomerResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDetailResolver]
    });
  });

  it('should be created', inject([CustomerDetailResolver], (service: CustomerDetailResolver) => {
    expect(service).toBeTruthy();
  }));
});
