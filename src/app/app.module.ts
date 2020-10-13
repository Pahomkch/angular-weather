import { BrowserModule } from '@angular/platform-browser'
import { LOCALE_ID, NgModule } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import localeRu from '@angular/common/locales/ru'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { WeatherInMyCityComponent } from './weather-in-my-city/weather-in-my-city.component'
import { WeatherOtherCityComponent } from './weather-other-city/weather-other-city.component'
import { WeatherTimelineComponent } from './weather-timeline/weather-timeline.component'
import { MainDailyNewsComponent } from './main-daily-news/main-daily-news.component'
import { SidebarNewsComponent } from './sidebar-news/sidebar-news.component'
import { ApiService } from './api.service'
import { MyDatePipe } from './shared/my-date.pipe'

registerLocaleData(localeRu, 'ru')
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherInMyCityComponent,
    WeatherOtherCityComponent,
    WeatherTimelineComponent,
    MainDailyNewsComponent,
    SidebarNewsComponent,
    MyDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
