import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class CustomerDetailResolver implements Resolve<Customer> {
  
  constructor(private customerService: CustomerService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Customer | Observable<Customer> | Promise<Customer> {
    let customerId = route.paramMap.get('id');
    return this.customerService.getCustomer(customerId).map(cust =>{
      if(cust){
        return cust;
      }else{
        this.router.navigate(['/customer-list']);
        return null;
      }
    });
  }

}
