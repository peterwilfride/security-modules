import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectServiceService {

  private readonly API = 'http://localhost:9000/vinculos/cpf/';
  private readonly EXONERACAO_URL = 'http://localhost:9000/exoneracoes';


  constructor(private httpClient:HttpClient,public cookie: CookieService, private router: Router) { 

  }

  listVinculos (){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      //'Access-Control-Allow-Origin':'*',
      //'Authorization': this.cookie.getCookie("auth")
    });

    var cpf = localStorage.getItem("username");
    return this.httpClient.get<String>(this.API+cpf,{headers:headers}).pipe(first());
  }
}
