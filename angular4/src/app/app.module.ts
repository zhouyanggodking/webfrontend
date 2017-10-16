import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavigationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router){
    // console.log(JSON.stringify(router.config, undefined, 2));
  }
 }
