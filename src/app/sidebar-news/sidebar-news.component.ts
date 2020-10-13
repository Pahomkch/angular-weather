import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-news',
  templateUrl: './sidebar-news.component.html',
  styleUrls: ['./sidebar-news.component.scss']
})
export class SidebarNewsComponent implements OnInit {
  NEWS = '../../assets/img/newsfeed.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
