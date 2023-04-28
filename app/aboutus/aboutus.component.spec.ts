import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABOUTUSComponent } from './aboutus.component';

describe('ABOUTUSComponent', () => {
  let component: ABOUTUSComponent;
  let fixture: ComponentFixture<ABOUTUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABOUTUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABOUTUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
