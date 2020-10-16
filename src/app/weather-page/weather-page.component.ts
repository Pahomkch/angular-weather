import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ApiService } from '../api.service'
import { City } from '../shared/models/City.model'

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  currentCity = {
    id: 1486209,
    name: 'Yekaterinburg',
    country: 'RU',
    coord: {
      lon: 60.612499,
      lat: 56.857498
    }
  }
  temperaturaOnWeek: any
  subscription: any
  forecastFromServr: any

  citiesList: City[] = [
    {
      id: 1508291,
      name: 'Челябинск',
      country: 'RU',
      coord: {
        lon: 61.429722,
        lat: 55.154442
      }
    },
    {
      id: 1792387,
      name: 'Тюмень',
      country: 'CN',
      coord: {
        lon: 110.352783,
        lat: 33.05278
      }
    },
    {
      id: 817691,
      name: 'Курган',
      country: 'RU',
      coord: {
        lon: 37.741112,
        lat: 55.291668
      }
    },
    {
      id: 511196,
      name: 'Пермь',
      country: 'RU',
      coord: {
        lon: 56.285519,
        lat: 58.01741
      }
    },
    {
      id: 524894,
      name: 'Москва',
      country: 'RU',
      coord: {
        lon: 37.606667,
        lat: 55.761665
      }
    },
    {
      id: 1503772,
      name: 'Ханты-Мансийск',
      country: 'RU',
      coord: {
        lon: 69.001938,
        lat: 61.004169
      }
    },
    {
      id: 1493197,
      name: 'Салехард',
      country: 'RU',
      coord: {
        lon: 66.601936,
        lat: 66.529999
      }
    },
    {
      id: 1496503,
      name: 'Ноябрьск',
      country: 'RU',
      coord: {
        lon: 75.450668,
        lat: 63.19936
      }
    }
  ]
  date: string
  activeWeatherCard = 0

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService
      .getWeatherForSomeDays(this.currentCity.coord.lat, this.currentCity.coord.lon)
      .subscribe(data => {
      console.log(data)
      this.temperaturaOnWeek = data.daily
      this.forecastFromServr = data
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  onChangeActiveWeatherCard(cardNumber: number): void {
    this.activeWeatherCard = cardNumber
  }


}
