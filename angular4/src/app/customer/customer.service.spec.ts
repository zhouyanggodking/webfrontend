import { TestBed, inject } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../model/customer';

describe('CustomerService', () => {
  let fakeHttpClient = {
    get<T>(){}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService, {
        provide: HttpClient,
        useValue: fakeHttpClient
      }]
    });
  });

  it('getCustomer() method should return correct customer', inject([CustomerService, HttpClient], (service: CustomerService, httpClient: HttpClient) => {
    let fakeCustomer: Customer = {
      id: '1',
      name: 'fakename',
      email: 'fake-email'
    };
    spyOn(httpClient, 'get').and.returnValue(Observable.of(fakeCustomer));
  
    service.getCustomer('1').subscribe(cust =>{
      expect(cust.id).toBe('1');
      expect(cust.name).toBe('fakename');
      expect(cust.email).toBe('fake-email');
    });
  }));

  it('getCustomers() method should return correct customer list', inject([CustomerService, HttpClient], (service: CustomerService, httpClient: HttpClient) => {
    let fakeCustomer: Customer[] = [{
      id: '1',
      name: 'fakename',
      email: 'fake-email'
    }];
    spyOn(httpClient, 'get').and.returnValue(Observable.of(fakeCustomer));
  
    service.getCustomers().subscribe(custList =>{
      expect(custList.length).toBe(1);
      expect(custList[0].id).toBe('1');
      expect(custList[0].name).toBe('fakename');
      expect(custList[0].email).toBe('fake-email');
    });
  }));
});
