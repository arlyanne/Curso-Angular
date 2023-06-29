import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsComponent1Component } from './firts-component1.component';

describe('FirtsComponent1Component', () => {
  let component: FirtsComponent1Component;
  let fixture: ComponentFixture<FirtsComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirtsComponent1Component]
    });
    fixture = TestBed.createComponent(FirtsComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
