import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCenterComponent } from './company-center.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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

  it('h2 tag content should be "Company Management" ', () => {
    let h2: DebugElement = fixture.debugElement.query(By.css('h2'));
    let h2Native: HTMLElement = h2.nativeElement;
    expect(h2Native.textContent).toContain('Company Management');
  });

  it('company component content is "This is company list" ', () => {
    let contentDiv: DebugElement = fixture.debugElement.query(By.css('div>div'));
    let contentNative: HTMLElement = contentDiv.nativeElement;
    expect(contentNative.textContent).toContain('This is company list');
  });

});
