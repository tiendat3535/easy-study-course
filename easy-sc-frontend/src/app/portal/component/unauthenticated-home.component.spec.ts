import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticatedHomeComponent } from './unauthenticated-home.component';

describe('UnauthenticatedHomeComponent', () => {
  let component: UnauthenticatedHomeComponent;
  let fixture: ComponentFixture<UnauthenticatedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthenticatedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthenticatedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
