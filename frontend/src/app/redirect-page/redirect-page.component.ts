import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { CookieService } from '../cookie.service';
import { LoginServiceService } from '../login-page/login-service.service';
import { RedirectServiceService } from './redirect-service.service';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css']
})
export class RedirectPageComponent implements OnInit {

  loggedIn: Boolean = false;
  arr: Observable<any[]> = EMPTY;
  displayedColumns = ['id','cpf','Denominacao','status','butao'];

  constructor(public cookie: CookieService,private service:LoginServiceService, private service2:RedirectServiceService,
    private router: Router) { }

  ngOnInit(): void {
    var userToken = this.cookie.getCookie("auth");
    this.loggedIn = userToken.length? true : false;

    if(this.loggedIn === false){
      this.router.navigate(['/login'])
    }

    this.service2.listVinculos().subscribe(
      {
        next:(ele:any) =>{
          this.arr = of(ele.content);
        }
      }
    );
    
  }

  logout():void{
    this.service.logout();
  }

  handleSort(e : Sort){

    this.service2.listVinculos().subscribe(
      {
        next:(ele:any) =>{
          this.arr = of(ele.content);
        }
      }
    );
  }

  selecionarVinculo(idVinculo:String){
    localStorage.setItem("idVinculo",idVinculo.toString());
    //this.service2.selVinculo();
    console.log("id vinculo selecionado com sucesso!")
    this.router.navigate([''])
  }

}
