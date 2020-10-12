import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInMyCityComponent } from './weather-in-my-city.component';

describe('WeatherInMyCityComponent', () => {
  let component: WeatherInMyCityComponent;
  let fixture: ComponentFixture<WeatherInMyCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInMyCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInMyCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
