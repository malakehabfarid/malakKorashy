import { Component, signal } from '@angular/core';
import{NewsListComponent} from './component/news-list/news-list.component';

@Component({
  imports: [NewsListComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('newsMK');
}
