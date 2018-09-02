import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/service/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: [ './loginpage.component.css' ]
})
export class LoginPageComponent implements OnInit {

  constructor(private authService:AuthService ) { }

  ngOnInit() {
   
  }

  login(){
    this.authService.login().subscribe();
    console.log('Login called');
  }
 
}
