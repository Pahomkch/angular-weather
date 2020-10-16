import { ApiService } from './../api.service'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { City } from '../shared/models/City.model'


@Component({
  selector: 'app-weather-in-my-city',
  templateUrl: './weather-in-my-city.component.html',
  styleUrls: ['./weather-in-my-city.component.scss']
})
export class WeatherInMyCityComponent implements OnInit, OnDestroy {
  CLOUD = '../../assets/img/cloudy.jpg'

  @Input() currentCity: City    // YekaterinburgID = 1486209
  cityName: string
  weather: string
  temperatura: number
  humidity: number
  wind: number
  pressure: number
  subscription: any


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.getWeatherOnCityID(this.currentCity.id).subscribe(data => {
      this.weather = data.weather[0].description
      this.cityName = data.name
      this.temperatura = data.main.temp
      this.humidity = data.main.humidity
      this.wind = data.wind.speed
      this.pressure = data.main.pressure
    })
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }
  }

}
