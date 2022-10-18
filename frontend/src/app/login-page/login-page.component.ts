import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder:FormBuilder,
              private location:Location,
              private service:LoginServiceService) {
    this.form = this.formBuilder.group({
      username: [null],
      password:[null],
      grant_type:["password"]
      })
   }

  ngOnInit(): void {
  }

  onLogin(){
    this.service.login(this.form.value);
  }

  onCancel(){
    this.location.back();
  }

}
