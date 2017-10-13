import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {CustomerService} from '../customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    console.log('custome-detail init');

    this.route.paramMap
      .switchMap((params: ParamMap) => this.customerService.getCustomer(params.get('id')))
      .subscribe((customer: Customer) => this.customer = customer);
  }

  gotoCustomers(){
    this.router.navigate(['/customer-list', {id: this.customer.id, foo: 'foo'}]);
    //this.router.navigate(['/customer-detail', 2, {customerId: this.customer.id, foo: 'foo'}]);
  }

}
