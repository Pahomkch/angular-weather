import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { City } from './shared/models/City.model'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  domain = 'https://api.openweathermap.org/data/2.5/'
  constructor(private http: HttpClient) { }

  getWeather(): any {
    return this.http.get(
      this.domain + 'weather?lat=56.8360&lon=60.6120&units=metric&appid=664b42c61061b7969ee4d087b09d9b54&lang=ru'
    )
  }

  getWeatherForSomeDays(): any {
    return this.http.get(
      this.domain + 'onecall?lat=56.8360&lon=60.6120&units=metric&appid=664b42c61061b7969ee4d087b09d9b54&lang=ru'
    )
  }

  getWeatherOnIDs(cityies: Array<City>): any {
    const listID = this.getAllCitiesID(cityies)
    return this.http.get(
      `${this.domain}group?id=${listID}&units=metric&appid=664b42c61061b7969ee4d087b09d9b54`
    )
  }

  getAllCitiesID(cityies: Array<City>): string {
    return cityies.map(city => city.id).join(',')
  }
}
