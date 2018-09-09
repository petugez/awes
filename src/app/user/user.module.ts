import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule,MatCheckboxModule,
        MatProgressSpinnerModule,MatPaginatorModule, 
        MatFormField, MatFormFieldModule, MatRadioModule, MatIconModule, MatOptionModule, MatSelectModule, MatInputModule, MatCard, MatCardModule, MatTooltipModule, MatSortModule} from '@angular/material';
import { FormsModule, FormBuilder, ControlContainer }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { UserListViewComponent } from './listview/userlistview.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailViewComponent } from './detailview/userdetailview.component';
//import { LoginPageComponent } from './loginpage/loginpage.component';
import {User} from './service/user';
import {UserService} from './service/user.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatInputModule,MatTableModule,MatSortModule,
    MatFormFieldModule,MatOptionModule,MatSelectModule,MatCardModule,MatTooltipModule,MatProgressSpinnerModule,MatPaginatorModule,
    UserRoutingModule

  ],
  declarations: [
    UserListViewComponent,
    UserDetailViewComponent
  ],
      
  providers:[UserService]
  
})
export class UserModule { }
