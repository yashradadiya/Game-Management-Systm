import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REGISTRATIONComponent } from './registration.component';

describe('REGISTRATIONComponent', () => {
  let component: REGISTRATIONComponent;
  let fixture: ComponentFixture<REGISTRATIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ REGISTRATIONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(REGISTRATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
