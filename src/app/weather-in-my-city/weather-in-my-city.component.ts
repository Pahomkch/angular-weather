import { ApiService } from './../api.service'
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core'
import { City } from '../shared/models/City.model'


@Component({
  selector: 'app-weather-in-my-city',
  templateUrl: './weather-in-my-city.component.html',
  styleUrls: ['./weather-in-my-city.component.scss']
})
export class WeatherInMyCityComponent implements OnInit, OnDestroy, OnChanges {
  CLOUD = '../../assets/img/cloudy.jpg'

  @Input() currentCity: City
  @Input() infoForViewMyCity: any
  cityName: string
  weather: string
  temperatura: number
  humidity: number
  wind: number
  pressure: number
  subscription: any



  constructor(private apiService: ApiService) { }

  getWeatherInCity(): any {
    this.subscription = this.apiService.getWeatherOnCityID(this.currentCity.id).subscribe(data => {
      this.weather = data.weather[0].description
      this.cityName = this.currentCity.name
      this.temperatura = data.main.temp
      this.humidity = data.main.humidity
      this.wind = data.wind.speed
      this.pressure = data.main.pressure
    })
  }

  ngOnInit(): void {
    this.getWeatherInCity()
  }

  ngOnChanges(changes: any): void {
    // logic get data about weather from card if click to timeline. 
    // And get from server if city is change
    if (changes.currentCity) {
      this.getWeatherInCity()
    } else {
      console.log(changes)
      const data = this.infoForViewMyCity.date
      this.weather = data.weather[0].description
      this.cityName = this.currentCity.name
      this.temperatura = data.temp.day
      this.humidity = data.humidity
      this.wind = data.wind_speed
      this.pressure = data.pressure
      
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }
  }
}
