import { ApiService } from './../api.service'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Forecast } from '../shared/models/forecast.model'

@Component({
  selector: 'app-weather-timeline',
  templateUrl: './weather-timeline.component.html',
  styleUrls: ['./weather-timeline.component.scss']
})
export class WeatherTimelineComponent implements OnInit, OnDestroy {
  forecast: any
  temperaturas: Forecast[]
  subscription: any
  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.getWeatherForSomeDays().subscribe(data => {
      this.temperaturas = data.daily
      this.forecast = data
    })
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }
  }
  getDate(utc: number): Date {
    const date = new Date(utc * 1000)
    return date
  }

}
