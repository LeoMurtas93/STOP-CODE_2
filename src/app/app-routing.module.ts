import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "news", component: NewsComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "", redirectTo: "/login", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
