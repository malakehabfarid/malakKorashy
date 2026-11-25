import { Component, computed, effect, inject } from '@angular/core';
import {NewsComponent} from './../news/news.component'
import { NewsService } from '../../service/news.service';

@Component({
  imports: [NewsComponent],
  selector: 'app-news-list',
  styleUrl: './news-list.component.scss',
  templateUrl: './news-list.component.html',
})
export class NewsListComponent {
  newsService=inject<any>(NewsService);
  currentNews=computed<any>(()=>{return this.newsService.data.value()?.articles});
  constructor(){
    effect(()=> {
      this.newsService.data.value();
      console.log(this.newsService.data.value()?.articles);
    });
  }
}
