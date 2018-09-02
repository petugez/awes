import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule, MatSidenavModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInput, MatInputModule, MatTab, MatTabsModule, MatTooltipModule} from '@angular/material';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
import {TestComponent} from './test/test.component';
import { UserRoutingModule } from './user/user-routing.module';
import { HttpClient } from 'selenium-webdriver/http';
import { UserModule } from './user/user.module';
import {MainMenuComponent} from './mainmenu/mainmenu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatButtonModule, MatCheckboxModule,MatSidenavModule,MatMenuModule,MatIconModule,MatFormFieldModule,MatInputModule,MatTabsModule
    ,MatTooltipModule
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainMenuComponent,
    TestComponent
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
