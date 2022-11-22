import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RedirectPageComponent } from './redirect-page/redirect-page.component';

const routes: Routes = [
  {
    path:"login", component:LoginPageComponent
  },
  {
    path:"vinculos", component:RedirectPageComponent
  },
  {
    path:"", component:HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
