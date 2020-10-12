import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTimelineComponent } from './weather-timeline.component';

describe('WeatherTimelineComponent', () => {
  let component: WeatherTimelineComponent;
  let fixture: ComponentFixture<WeatherTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
