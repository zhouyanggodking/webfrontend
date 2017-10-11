import { Component, OnInit } from '@angular/core';

import { Customer } from '../../model/customer';
import { Address } from '../../model/address';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];

  constructor() { }

  ngOnInit() {
    this.customerList =[{
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
  }

}
