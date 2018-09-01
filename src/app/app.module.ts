import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
//import { LoginPageComponent } from './loginpage/loginpage.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   
    AppRoutingModule,
    HttpClientModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
   
  ],
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
