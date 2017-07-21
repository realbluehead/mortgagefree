import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortageDetailsComponent } from './mortage-details.component';

describe('MortageDetailsComponent', () => {
  let component: MortageDetailsComponent;
  let fixture: ComponentFixture<MortageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
