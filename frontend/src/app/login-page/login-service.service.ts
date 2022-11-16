import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../models/User.model';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '../../models/Token.model';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly API = 'http://localhost:8080/auth/realms/pagrn/protocol/openid-connect/token';
  private readonly LOGOFF_API = "http://localhost:8080/auth/realms/pagrn/protocol/openid-connect/logout";

  //private readonly API = 'auth/realms/pagrn/protocol/openid-connect/token';

  constructor(private httpClient:HttpClient, public cookie: CookieService, private router: Router) { 
  }

  login(user:User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      //'Acess-Control-Allow-Headers':'Content-Type',
      //'Acess-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      //'Access-Control-Allow-Headers':'X-CSRF-Token, X-Requested-With, Accept, Content-Length, Content-Type, Date',
      //'Access-Control-Allow-Origin':'*',
    });

    const params = new HttpParams()
    .set("client_id", "auth-pagrn")
    .set("client_secret", "3e6e0eda-ded8-4b9e-a25f-2101a7c8d0c9")
    .set("grant_type", "password")
    .set("username", user.username.toString())
    .set("password", user.password.toString())

    return this.httpClient.post<Token>(this.API, params, { headers }).subscribe({
      next: (u:any) => {
        //localStorage.setItem('auth', u.token_type+" "+u.access_token);

        console.log(u);
        this.cookie.setCookie({name:'auth', value: u.token_type+" "+u.access_token, expireSecs: 600 });
        this.cookie.setCookie({name:'refresh', value: u.refresh_token, expireSecs: 600 });
        localStorage.setItem("username",user.username.toString());
        this.router.navigate(['/'])
      },
      error: (e:any) => {console.log(e);},
      complete: () => console.info('login complete')
    });
  }

  logout(){
    var refresh = this.cookie.getCookie("refresh");

    const params = new HttpParams()
    .set("client_id", "auth-pagrn")
    .set("client_secret", "3e6e0eda-ded8-4b9e-a25f-2101a7c8d0c9")
    .set("refresh_token",refresh);

    return this.httpClient.post(this.LOGOFF_API,params).subscribe({
      next: (u:any) => {
        this.cookie.deleteCookie("auth");
        this.cookie.deleteCookie("refresh");
        localStorage.removeItem("username");
        localStorage.removeItem("idVinculo");
        this.router.navigate(['/login'])
      },
      error: (e:any) => {console.log(e);},
      complete: () => console.info('logoff complete')
    });
  }
}
