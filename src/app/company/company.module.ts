import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule,MatCheckboxModule,
        MatProgressSpinnerModule,MatPaginatorModule, 
        MatFormField, MatFormFieldModule, MatRadioModule, MatIconModule, MatOptionModule, MatSelectModule, MatInputModule, MatCard, MatCardModule, MatTooltipModule, MatSortModule} from '@angular/material';
import { FormsModule, FormBuilder, ControlContainer }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { CompanyListViewComponent } from './listview/comapnylistview.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyDetailViewComponent } from './detailview/companydetailview.component';
//import { LoginPageComponent } from './loginpage/loginpage.component';
import {Company} from './service/company';
import {CompanyService} from './service/company.service';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,FlexModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatInputModule,MatTableModule,MatSortModule,
    MatFormFieldModule,MatOptionModule,MatSelectModule,MatCardModule,MatTooltipModule,MatProgressSpinnerModule,MatPaginatorModule,
    CompanyRoutingModule

  ],
  declarations: [
    CompanyListViewComponent,
    CompanyDetailViewComponent
  ],
      
  providers:[CompanyService]
  
})
export class CompanyModule { }
