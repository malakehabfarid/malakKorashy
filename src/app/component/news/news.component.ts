import { Component, effect, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-news',
  styleUrl: './news.component.scss',
  templateUrl: './news.component.html',
})
export class NewsComponent {
  itemInfo=input.required<any>();
  constructor(){
    console.log("ok");

    effect(()=> {
      console.log(this.itemInfo())
    })
  }
}
