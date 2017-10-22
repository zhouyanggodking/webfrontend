import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';

import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
// import { AdminModule } from './admin/admin.module';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { RxjsDemoService } from './rxjs-demo.service';
import { LoggerService } from './components/logger/logger.service';
import { BetterLoggerService } from './components/logger/better-logger.service';
import { dummyLogger } from './components/logger/dummy-logger.service';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockCustomerDbService } from './mock-server/mock-customers';

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
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockCustomerDbService),
    FormsModule,
    CustomerModule,
    SharedModule,
    // AdminModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    CanDeactivateGuard,
    RxjsDemoService,
    // LoggerService,
    // {
    //   provide: LoggerService,
    //   useExisting: BetterLoggerService
    // },
    // {
    //   provide: LoggerService,
    //   useValue: dummyLogger
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router){
    // console.log(JSON.stringify(router.config, undefined, 2));
  }
 }
