import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { Router } from '@angular/router';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn: Boolean = false;
  constructor(public cookie: CookieService,private service:HomeServiceService,private router: Router) { }

  ngOnInit(): void {

    var userToken = this.cookie.getCookie("auth");
    this.loggedIn = userToken.length? true : false;

    if(this.loggedIn === false){
      this.router.navigate(['/login'])
    }
    
  }

  exonerar(){
    this.service.exonerar();
  }

  nomear(){
    this.service.nomear();
  }

  promover(){

  }

  criarFuncao(){
    this.service.criarFuncao();
  }
}
