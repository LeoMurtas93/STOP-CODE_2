import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoggedUser } from 'src/model/login.model';
import { Root, SourceNews } from 'src/model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http: HttpClient) { }
@Input()
  private httpOptions = {
    headers: new HttpHeaders ({
      "X-Api-Key": environment.NEWS_API_KEY
    })
  }

  search(): Observable<Root>{
    return this.http.get<Root>(`${environment.NEWS_API_BASE_URL}/top-headlines/sources?`, this.httpOptions)
  }

  setLoggedUser(user: LoggedUser){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser | null {
    let userStorage = localStorage.getItem("user");

    if (userStorage != null) {
      let u: LoggedUser = JSON.parse(userStorage);
      return u;
    }
    return null;
  }
}
