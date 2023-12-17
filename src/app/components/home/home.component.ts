import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { SearchService } from 'src/app/services/search.service';
import { NewNewsDto, SourceNews } from 'src/model/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // model?: NewNewsDto;
  newsSearch: SourceNews[] = []

  constructor(public searchService: SearchService, public newsService: NewsService, private router: Router) { }

  searchTerm : string ="";

  search() {
    if (this.searchTerm !== '') {
      this.searchService.searchNews(this.searchTerm).subscribe((dati) => (this.newsSearch = dati.sources)); 
    }
    return this.newsSearch
  }
}
