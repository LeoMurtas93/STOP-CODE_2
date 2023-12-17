import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Root } from 'src/model/news.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders ({
      "X-Api-Key": environment.NEWS_API_KEY
    })
  }


  // searchNews(): Observable<Root>{
  //   return this.http.get<Root>(`${environment.NEWS_API_BASE_URL}/everything?q=everything`, this.httpOptions)
  // }

  searchNews(searchTerm: string): Observable<Root> {
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${environment.NEWS_API_KEY}`;
    return this.http.get<Root>(url)
  }
}
