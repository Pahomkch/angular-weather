import { ApiService } from './../api.service'
import { Component, OnDestroy, OnInit } from '@angular/core'


@Component({
  selector: 'app-weather-in-my-city',
  templateUrl: './weather-in-my-city.component.html',
  styleUrls: ['./weather-in-my-city.component.scss']
})
export class WeatherInMyCityComponent implements OnInit, OnDestroy  {
  CLOUD = '../../assets/img/cloudy.jpg'
  weather: string
  temperatura: number
  humidity: number
  wind: number
  pressure: number
  subscription: any


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.getWeather().subscribe(data => {
      this.weather = data.weather[0].description
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
