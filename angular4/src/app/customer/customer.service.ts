import { Injectable } from '@angular/core';

import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomerService {
  private api_url = 'api/customers';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient){}

  getCustomers(): Observable<Customer[]>{
    //return Observable.of(this.customers);
    return this.httpClient.get<Customer[]>(this.api_url, {
      headers: this.headers
    });
  }

  getCustomer(id: string): Observable<Customer>{
    // return this.getCustomers()
    //   .map(custs => 
    //     custs.find(cust => cust.id === id));
    return this.httpClient.get<Customer>(`${this.api_url}/${id}`,{
      headers: this.headers
    });
  }

}
