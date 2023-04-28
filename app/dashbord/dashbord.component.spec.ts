import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DASHBORDComponent } from './dashbord.component';

describe('DASHBORDComponent', () => {
  let component: DASHBORDComponent;
  let fixture: ComponentFixture<DASHBORDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DASHBORDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DASHBORDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
