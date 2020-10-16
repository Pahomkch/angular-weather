import { ApiService } from './../api.service'
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
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
  @Output() cardPicked: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  pickDate(): void {
    this.cardPicked.emit({
      date: this.temperaturas[this.activForecastDay]
    })
  }

  onChangeActivCard(index: number): any {
    this.activForecastDay = index
    this.pickDate()
  }

  ngOnInit(): void {
  }

  getDate(utc: number): Date {
    const date = new Date(utc * 1000)
    return date
  }
}
