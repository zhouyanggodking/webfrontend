import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { CustomerCenterComponent } from "./customer-center/customer-center.component";
import { CompanyCenterComponent } from "./company-center/company-center.component";
import { AuthGuard } from '../auth-guard.service';
import { CanDeactivateGuard } from "../can-deactivate-guard.service";

const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',//use component-less route to manage all child routes
        canActivateChild: [AuthGuard],
        children:[
          {
            path: "customer-center",
            component: CustomerCenterComponent,
            canDeactivate: [CanDeactivateGuard],
          },
          {
            path: "company-center",
            component: CompanyCenterComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
