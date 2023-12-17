import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';
import { LoginDto } from 'src/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model = new LoginDto();

  constructor(public loginService: LoginService, public newsService: NewsService, private router: Router){
  }

  login(){
    this.loginService.login(this.model).pipe().subscribe((loggedUser) => {
      this.newsService.setLoggedUser(loggedUser);
      this.router.navigate(['/news']);
    })
  }

}
