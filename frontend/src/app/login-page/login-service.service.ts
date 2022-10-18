import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../models/User.model';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '../../models/Token.model';
import { CookieService } from '../cookie.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly API = 'http://localhost:28080/auth/realms/pagrn/protocol/openid-connect/token';
  //private readonly API = 'auth/realms/pagrn/protocol/openid-connect/token';

  constructor(private httpClient:HttpClient, public cookie: CookieService) { 
  }

  login(user:User){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const params = new HttpParams()
    .set("client_id", "auth-pagrn")
    .set("client_secret", "8c6b2c2e-adb8-460e-a712-53b88e3e6a3c")
    .set("grant_type", "password")
    .set("username", user.username.toString())
    .set("password", user.password.toString())

    console.log(user)

    //return this.httpClient.post<User>(this.API, params, this.options)

    return this.httpClient.post<Token>(this.API, params, { headers }).subscribe({
      next: (u:any) => {
        localStorage.setItem('auth', u.token_type+" "+u.access_token);
        this.cookie.setCookie({name:'auth', value: u.token_type+" "+u.access_token, expireSecs: 60 });
      },
      error: (e:any) => console.log(e),
      complete: () => console.info('login complete')
    });
  }
}
