import { Component, OnInit } from '@angular/core';

import { Customer } from '../../model/customer';
import { Address } from '../../model/address';

import { CustomerService } from '../customer.service'

@Component({
  selector: 'gk-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];

  constructor(private customerSrc: CustomerService) { }

  ngOnInit() {
    this.customerSrc.getCustomers()
      .subscribe(custs => this.customerList = custs);
  }

}
