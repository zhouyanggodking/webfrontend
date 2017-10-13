import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCenterComponent } from './company-center.component';

describe('CompanyCenterComponent', () => {
  let component: CompanyCenterComponent;
  let fixture: ComponentFixture<CompanyCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
