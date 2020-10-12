import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOtherCityComponent } from './weather-other-city.component';

describe('WeatherOtherCityComponent', () => {
  let component: WeatherOtherCityComponent;
  let fixture: ComponentFixture<WeatherOtherCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherOtherCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOtherCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
