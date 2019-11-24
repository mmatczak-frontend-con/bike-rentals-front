import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalChartComponent } from './rental-chart.component';

describe('RentalChartComponent', () => {
  let component: RentalChartComponent;
  let fixture: ComponentFixture<RentalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
