import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrmEditComponent } from './xrm-edit.component';

describe('XrmEditComponent', () => {
  let component: XrmEditComponent;
  let fixture: ComponentFixture<XrmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
