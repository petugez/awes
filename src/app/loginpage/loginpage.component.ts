import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {

  }

  login() {
    this.authService.login().subscribe(
      data => { 
         this.router.navigate(['']); }
    );
    console.log('Login called');
  }

}
