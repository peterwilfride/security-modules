import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectServiceService {

  private readonly API = 'http://localhost:8080/vinculos/cpf/';
  private readonly SETOR = 'http://localhost:8080/funcoes';


  constructor(private httpClient:HttpClient) { 

  }

  listVinculos (){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    var cpf = localStorage.getItem("username");
    return this.httpClient.get<String>(this.API+cpf).pipe(first());
  }

  selVinculo(){

    //84833783452
    //mockando uma nomeacao
    var vinculo = localStorage.getItem("idVinculo")! ;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    var novaFuncao = {
      "denominacao": "string2",
      "tipoGratificacao": "ABONO_PERMANENCIA",
      "valorRepresentacao": 0,
      "valorVencimento": 0,
      "idVinculoResponsavel": vinculo
    }


    return this.httpClient.post(this.SETOR, JSON.stringify(novaFuncao), {headers}).subscribe({
      next: (u:any) => {

        console.log(u);
      },
      error: (e:any) => {console.log(e);},
      complete: () => console.info('criacao de funcao completa')
    });
  }
}
