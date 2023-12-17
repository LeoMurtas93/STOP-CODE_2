import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoggedUser, LoginDto } from 'src/model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {}

  login(model: LoginDto): Observable<LoggedUser>{
    return this.http.post<LoggedUser>(`${environment.JSON_SERVER_BASE_URL}/login`, model)
  }

  

 

  // get isUserLogged(): boolean {
  //   return this.getLoggedUser() != null;
  // }

  // logout() {
  //   localStorage.removeItem("user");
  // }
}
