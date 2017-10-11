import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//TODO: why need this
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerListComponent, 
    CustomerDetailComponent
  ]
})
export class CustomerModule { }
