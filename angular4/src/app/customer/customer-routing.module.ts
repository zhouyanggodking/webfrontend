import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomerDetailResolver } from "./customer-detail-resolver.service";

const customerRoutes: Routes = [
  {
    path: "customer-list",
    component: CustomerListComponent
  },
  {
    path: "customer-detail/:id",
    component: CustomerDetailComponent,
    resolve:{
      customer: CustomerDetailResolver
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
  providers: [CustomerDetailResolver]
})
export class CustomerRoutingModule {}
