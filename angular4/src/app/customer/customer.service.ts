import { Injectable } from '@angular/core';

import { Customer } from '../model/customer';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  private customers: Customer[] = [{
    id: '1',
    name: 'GodKing',
    email: 'godking@gmail.com',
    phone: '123456789'
  },{
    id: '2',
    name: 'OceanSky',
    email: 'oceansky@gmail.com',
    phone: '121212121'
  }];

  getCustomers(): Observable<Customer[]>{
    return Observable.of(this.customers);
  }

  getCustomer(id: string): Observable<Customer>{
    return this.getCustomers()
      .map(custs => 
        custs.find(cust => cust.id === id));
  }

}
