import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCenterComponent } from './customer-center.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';

describe('CustomerCenterComponent', () => {
  let component: CustomerCenterComponent;
  let fixture: ComponentFixture<CustomerCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCenterComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('custmer component title is "Customer Management"', () => {
    let h2: DebugElement = fixture.debugElement;
    let h2Native: HTMLElement = h2.nativeElement;
    expect(h2Native.textContent).toContain('Customer Management');
  });

  it('canDeactivate always return true for now', ()=>{
    let result = component.canDeactivate();
    expect(result).toBeTruthy();
  });
});
