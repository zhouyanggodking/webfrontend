import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.authService.login().subscribe((val) => {
      if(this.authService.isLoggedIn){
        let path = this.authService.redirectUrl ? this.authService.redirectUrl: '/customer-list';
        this.router.navigate([path]);
      }else{
        console.log('loggin failed');
      }

    });
  }

}
