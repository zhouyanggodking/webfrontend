import { Component, OnInit } from '@angular/core';
import { CustomerListService } from '../../services/customerList';
import {Customer} from '../../model/customer';

@Component({
  selector: 'gk-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers:[CustomerListService]
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];

  constructor(private customerListSvc: CustomerListService) { }

  ngOnInit() {
    this.customerList = this.customerListSvc.get();
  }

}
