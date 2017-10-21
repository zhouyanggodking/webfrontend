import { Component, OnInit } from '@angular/core';

import { Customer } from '../../model/customer';
import { Address } from '../../model/address';

import { CustomerService } from '../customer.service'
import { LoggerService } from '../../components/logger/logger.service';

@Component({
  selector: 'gk-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [LoggerService]
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];

  constructor(private customerSrc: CustomerService, private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('CustomerListComponent init');
    this.customerSrc.getCustomers()
      .subscribe(custs => this.customerList = custs);
  }

}
