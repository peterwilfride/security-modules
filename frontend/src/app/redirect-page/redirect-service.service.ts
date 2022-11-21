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
      'Access-Control-Allow-Origin':'*',
    });

    var cpf = localStorage.getItem("username");
    return this.httpClient.get<String>(this.API+cpf,{headers:headers}).pipe(first());
  }

  selVinculo(){
    var vinculo = localStorage.getItem("idVinculo")! ;
    
    const headers = new HttpHeaders({
      //'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json',
      'Authorization': this.cookie.getCookie("auth")
    });

    /*var novaFuncao = {
      "denominacao": "string2",
      "tipoGratificacao": "ABONO_PERMANENCIA",
      "valorRepresentacao": 0,
      "valorVencimento": 0,
      "idVinculoResponsavel": vinculo
    }*/

    var novaExoneracao = {
      "dataVigencia": "2022-11-21",
      "descricao": "string",
      "processoAdministrativo": "string",
      "vinculo": vinculo
    }


    return this.httpClient.post(this.EXONERACAO_URL, JSON.stringify(novaExoneracao), {headers}).subscribe({
      next: (u:any) => {

        console.log(u)
      },
      error: (e:any) => {
        console.log(e)
        alert("não foi possível realizar a exoneração deste usuário")
      },
      complete: () => {
        window.location.reload(),
        console.info('criacao de funcao completa')
        
      }
    });
    
  }
}
