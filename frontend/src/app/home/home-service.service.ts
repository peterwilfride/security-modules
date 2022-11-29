import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


  private readonly EXONERACAO_URL = 'http://localhost:9000/exoneracoes';
  private readonly FUNCAO_URL = 'http://localhost:9000/funcoes';
  private readonly NOMEACAO_URL = 'http://localhost:9000/nomeacoes';
  private readonly PROMOCAO_URL = 'http://localhost:9000/promocoes';


  constructor(private httpClient:HttpClient,public cookie: CookieService, private router: Router) { }

  exonerar(){

    var vinculo = localStorage.getItem("idVinculo")! ;
    
    var novaExoneracao = {
      "dataVigencia": "2022-11-21",
      "descricao": "string",
      "processoAdministrativo": "string",
      "vinculo": vinculo
    }

    this.createRequest(this.EXONERACAO_URL,novaExoneracao);
  }

  nomear(){
    var vinculo = localStorage.getItem("idVinculo")! ;

    var novaNomeacao = {
      "dataFinalExercicio": new Date().toISOString().split('T')[0],
      "dataInicioExercicio": new Date().toISOString().split('T')[0],
      "dataNomeacao": new Date().toISOString().split('T')[0],
      "dataPosse": new Date().toISOString().split('T')[0],
      "dataVigencia": new Date().toISOString().split('T')[0],
      "descontaIRPF": true,
      "descricao": "string",
      "idVinculoResponsavel": vinculo,
      "nivelCargo": 1,
      "processoAdministrativo": "string",
      "regimeJuridico": "RJU",
      "servidor": 2,
      "setor": 1,
      "tipoVinculo": "EFETIVO_CIVIL",
      "unidadeOrganizacional": 1 // 1 SEAD    // 2 SAUDE
    }

    this.createRequest(this.NOMEACAO_URL,novaNomeacao);
  }

  promover(){

  }

  criarFuncao(){

    var vinculo = localStorage.getItem("idVinculo")! ;

    var novaFuncao = {
      "denominacao": "string2",
      "tipoGratificacao": "ABONO_PERMANENCIA",
      "valorRepresentacao": 0,
      "valorVencimento": 0,
      "idVinculoResponsavel": vinculo
    }

    this.createRequest(this.FUNCAO_URL,novaFuncao);
  }

  createRequest(url:string,json:object){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.cookie.getCookie("auth")
    });

    return this.httpClient.post(url, JSON.stringify(json), {headers}).subscribe({
      next: (u:any) => {
        console.log(u)
      },
      error: (e:any) => {
        console.log(e)
        alert("ERROR")
      },
      complete: () => {
        console.info('SUCESSO')
      }
    });
  }
}
