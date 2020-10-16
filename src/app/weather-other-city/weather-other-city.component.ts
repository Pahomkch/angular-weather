import { ApiService } from './../api.service'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Forecast } from '../shared/models/forecast.model'
import { City } from '../shared/models/City.model'

@Component({
  selector: 'app-weather-other-city',
  templateUrl: './weather-other-city.component.html',
  styleUrls: ['./weather-other-city.component.scss']
})
export class WeatherOtherCityComponent implements OnInit, OnDestroy  {
 
  @Input() citiesList: City[]
  forecastForCities: {name: string, temp: number}[]

  subscription: any
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
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
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }
  }
}




