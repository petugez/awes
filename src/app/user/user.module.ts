import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule,MatCheckboxModule,
        MatProgressSpinnerModule,MatPaginatorModule, 
        MatFormField, MatFormFieldModule, MatRadioModule, MatIconModule, MatOptionModule, MatSelectModule, MatInputModule, MatCard, MatCardModule, MatTooltipModule, MatSortModule} from '@angular/material';
import { FormsModule, FormBuilder, ControlContainer }    from '@angular/forms';


import { UserListViewComponent } from './listview/userlistview.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailViewComponent } from './detailview/userdetailview.component';

import {UserService} from './service/user.service'
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    // FlexModule,
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
