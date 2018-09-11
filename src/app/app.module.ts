import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule,MatCheckboxModule, MatSidenavModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInput, MatInputModule, MatTab, MatTabsModule, MatTooltipModule} from '@angular/material';
import {
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule, 
  MatListModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatSelectModule, 
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,MatIconModule,MatCardModule,MatTabsModule
} from "@angular/material";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
import {TestComponent} from './test/test.component';
import { UserRoutingModule } from './user/user-routing.module';
import { HttpClient } from 'selenium-webdriver/http';
import { UserModule } from './user/user.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AuthService} from './auth/service/auth.service';
import {AuthGuardService} from './security/auth-guard.service';
import {MainMenuComponent} from './mainmenu/mainmenu.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        AppRoutingModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,MainMenuComponent,
  
    TestComponent
  ],
  providers:[AuthService,AuthGuardService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
