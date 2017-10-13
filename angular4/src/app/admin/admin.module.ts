import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './admin.component';
import { CustomerCenterComponent } from './customer-center/customer-center.component';
import { CompanyCenterComponent } from './company-center/company-center.component';

import { CustomerModule } from "../customer/customer.module";
// import { CustomerListComponent } from "../customer/customer-list/customer-list.component";

@NgModule({
  imports: [
    CommonModule,
    CustomerModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, CustomerCenterComponent, CompanyCenterComponent]
})
export class AdminModule { }
