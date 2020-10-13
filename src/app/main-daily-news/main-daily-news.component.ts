import { Component, OnInit } from '@angular/core'
import { News } from '../shared/models/news.model'

@Component({
  selector: 'app-main-daily-news',
  templateUrl: './main-daily-news.component.html',
  styleUrls: ['./main-daily-news.component.scss']
})
export class MainDailyNewsComponent implements OnInit {
  news: News[] = [
    { img: '../../assets/img/news-foto/news_1.jpg', descr: 'Сбербанк и ВТБ повысили ставку по ипотеке. Когда теперь брать кредит?' },
    { img: '../../assets/img/news-foto/news_2.jpg', descr: 'Как в России прощаются с ворами в законе. Хабаровску и не снилось' },
    { img: '../../assets/img/news-foto/news_3.jpg', descr: '8 громадных взрывов газа, уничтожавших дома. ФОТО' },
    { img: '../../assets/img/news-foto/news_4.jpg', descr: 'Как в России прощаются с ворами в законе. Хабаровску и не снилось' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
