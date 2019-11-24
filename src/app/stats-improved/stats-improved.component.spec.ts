import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsImprovedComponent } from './stats-improved.component';

describe('StatsImprovedComponent', () => {
  let component: StatsImprovedComponent;
  let fixture: ComponentFixture<StatsImprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsImprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsImprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
