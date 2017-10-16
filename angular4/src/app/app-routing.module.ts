import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AboutComponent } from "./components/about/about.component";
import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
  //first win strategy
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  {
    path: "admin",
    loadChildren: "app/admin/admin.module#AdminModule",
    canLoad: [AuthGuard]
  },
  { path: "pagenotfound", component: PageNotFoundComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }, //init page
  { path: "**", component: PageNotFoundComponent } //last resort
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  exports: [RouterModule], //TODO: why need to export RouterModule
  providers: [AuthGuard]
})
export class AppRoutingModule {}
