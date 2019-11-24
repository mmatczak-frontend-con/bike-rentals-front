import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsNaiveComponent } from './stats-naive.component';

describe('StatsNaiveComponent', () => {
  let component: StatsNaiveComponent;
  let fixture: ComponentFixture<StatsNaiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsNaiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsNaiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
