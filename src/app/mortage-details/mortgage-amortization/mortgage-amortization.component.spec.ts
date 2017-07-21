import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageAmortizationComponent } from './mortgage-amortization.component';

describe('MortgageAmortizationComponent', () => {
  let component: MortgageAmortizationComponent;
  let fixture: ComponentFixture<MortgageAmortizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageAmortizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageAmortizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
