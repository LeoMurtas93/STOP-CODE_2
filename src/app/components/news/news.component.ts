import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewNewsDto, SourceNews } from 'src/model/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  model?: NewNewsDto;
  news: SourceNews[] = []



  constructor(public newsService: NewsService) {

  }
  ngOnInit(): void {
    if(this.newsService.getLoggedUser()!= null){
      this.model = new NewNewsDto(this.newsService.getLoggedUser()!.user.id)
    }
    this.newsService.search().subscribe((dati) => (this.news = dati.sources))
  }


  

  

}
