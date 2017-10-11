import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';

const customerRoutes: Routes = [
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-detail/:id', component: CustomerDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
