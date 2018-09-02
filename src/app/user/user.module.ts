import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule, MatFormField, MatFormFieldModule, MatRadioModule, MatIconModule} from '@angular/material';
import { FormsModule, FormBuilder, ControlContainer }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { UserListViewComponent } from './listview/userlistview.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailViewComponent } from './detailview/userdetailview.component';
//import { LoginPageComponent } from './loginpage/loginpage.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    UserRoutingModule,
    MatFormFieldModule,MatRadioModule,MatIconModule
 
  ],
  declarations: [
    UserListViewComponent,
    UserDetailViewComponent
  ],
  providers:[FormBuilder,ControlContainer]
  
})
export class UserModule { }
