import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailComponent } from './customer-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../components/logger/logger.service';
import { Observable } from 'rxjs/Observable';

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  let fakeRoute = {
    data: Observable.of({
      customer:{
        id: '1',
        name: 'fake-name',
        email: 'fake-email'
      }
    })
  };

  let fakeRouter ={
    navigate(){

    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeRoute},
        {provide: Router, useValue: fakeRouter},
        LoggerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
