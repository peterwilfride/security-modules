import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RedirectPageComponent } from './redirect-page/redirect-page.component';

const routes: Routes = [{
    path:"login", component:LoginPageComponent
  },{
    path:"", component:RedirectPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
