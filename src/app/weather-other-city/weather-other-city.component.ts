import { ApiService } from './../api.service'
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core'
import { City } from '../shared/models/City.model'
import { leadingComment } from '@angular/compiler'

@Component({
  selector: 'app-weather-other-city',
  templateUrl: './weather-other-city.component.html',
  styleUrls: ['./weather-other-city.component.scss']
})
export class WeatherOtherCityComponent implements OnInit, OnDestroy, OnChanges {

  @Input() citiesList!: City[]
  @Output() cityPicked: EventEmitter<any> = new EventEmitter<any>()
  forecastForCities: { name: string, temp: number }[]
  subscription: any

  constructor(private apiService: ApiService) {
  }

  pickToNewCity(cityIndex: any): void {
    this.cityPicked.emit(cityIndex)
  }

  ngOnInit(): void {
    this.citiesList = this.citiesList.slice(1)
    this.subscription = this.apiService.getWeatherOnIDs(this.citiesList).subscribe(date => {
      // create array for view with template and server response
      this.forecastForCities = this.citiesList.map((city, idx) => {
        return {
          name: city.name,
          temp: date.list[idx].main.temp
        }
      })
    })
  }

  ngOnChanges(changens: any): void {
    this.citiesList = changens.citiesList.currentValue
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }
  }
}




