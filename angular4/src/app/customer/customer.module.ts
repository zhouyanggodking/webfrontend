import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//TODO: why need this
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerService } from './customer.service';
import { LoggerService } from '../components/logger/logger.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  exports:[CustomerListComponent],//make other modules use it
  declarations: [
    CustomerListComponent, 
    CustomerDetailComponent
  ],
  providers: [CustomerService, LoggerService]
})
export class CustomerModule { }
