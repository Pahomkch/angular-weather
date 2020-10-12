import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherInMyCityComponent } from './weather-in-my-city/weather-in-my-city.component';
import { WeatherOtherCityComponent } from './weather-other-city/weather-other-city.component';
import { WeatherTimelineComponent } from './weather-timeline/weather-timeline.component';
import { MainDailyNewsComponent } from './main-daily-news/main-daily-news.component';
import { SidebarNewsComponent } from './sidebar-news/sidebar-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherInMyCityComponent,
    WeatherOtherCityComponent,
    WeatherTimelineComponent,
    MainDailyNewsComponent,
    SidebarNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
