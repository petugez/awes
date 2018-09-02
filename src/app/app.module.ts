import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule, MatSidenavModule, MatMenuModule, MatIconModule} from '@angular/material';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
import { UserRoutingModule } from './user/user-routing.module';
import { HttpClient } from 'selenium-webdriver/http';
import { UserModule } from './user/user.module';
import {MainMenuComponent} from './mainmenu/mainmenu.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    MatButtonModule, MatCheckboxModule,MatSidenavModule,MatMenuModule,MatIconModule
   
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainMenuComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
