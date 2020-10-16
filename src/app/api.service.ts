import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { City } from './shared/models/City.model'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  domain = `https://api.openweathermap.org/data/2.5/`
  constructor(private http: HttpClient) { }

  getWeatherOnCityID(id: number): any {
    return this.http.get(
      `${this.domain}weather?id=${id}&units=metric&appid=664b42c61061b7969ee4d087b09d9b54&lang=ru`
    )
  }

  getWeatherForSomeDays(lat: number, lon: number): any {
    return this.http.get(
      `${this.domain}onecall?lat=${lat}&lon=${lon}&units=metric&appid=664b42c61061b7969ee4d087b09d9b54&lang=ru`
      // 56.8360   60.6120
    )
  }

  getWeatherOnIDs(cityies: Array<City>): any {
    const listID = this._getAllCitiesID(cityies)
    return this.http.get(
      `${this.domain}group?id=${listID}&units=metric&appid=664b42c61061b7969ee4d087b09d9b54`
    )
  }

  private _getAllCitiesID(cityies: Array<City>): string {
    return cityies.map(city => city.id).join(',')
  }
}
