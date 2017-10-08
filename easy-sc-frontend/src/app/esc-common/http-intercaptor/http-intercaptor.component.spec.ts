import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpIntercaptorComponent } from './http-intercaptor.component';

describe('HttpIntercaptorComponent', () => {
  let component: HttpIntercaptorComponent;
  let fixture: ComponentFixture<HttpIntercaptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpIntercaptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpIntercaptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
