import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrmViewComponent } from './xrm-view.component';

describe('XrmViewComponent', () => {
  let component: XrmViewComponent;
  let fixture: ComponentFixture<XrmViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrmViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrmViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
