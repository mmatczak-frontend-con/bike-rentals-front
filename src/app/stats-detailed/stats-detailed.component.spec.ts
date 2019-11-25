import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDetailedComponent } from './stats-detailed.component';

describe('StatsDetailedComponent', () => {
  let component: StatsDetailedComponent;
  let fixture: ComponentFixture<StatsDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
