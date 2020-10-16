import { ApiService } from './../api.service'
import { Component, OnDestroy, OnInit, Input } from '@angular/core'
import { Forecast } from '../shared/models/forecast.model'

@Component({
  selector: 'app-weather-timeline',
  templateUrl: './weather-timeline.component.html',
  styleUrls: ['./weather-timeline.component.scss']
})
export class WeatherTimelineComponent implements OnInit {
  @Input() city: string
  @Input() date: number
  @Input() temperaturas: Forecast[]
  @Input() activForecastDay

  constructor() { }

  onChangeActivCard(index: number): any {
    this.activForecastDay = index
  }

  ngOnInit(): void {
  }

  getDate(utc: number): Date {
    const date = new Date(utc * 1000)
    return date
  }
}
