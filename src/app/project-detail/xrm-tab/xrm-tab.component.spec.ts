import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrmTabComponent } from './xrm-tab.component';

describe('XrmTabComponent', () => {
  let component: XrmTabComponent;
  let fixture: ComponentFixture<XrmTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrmTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
