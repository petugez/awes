import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatTableModule, MatCheckboxModule,
  MatProgressSpinnerModule, MatPaginatorModule,
  MatFormField, MatFormFieldModule, MatRadioModule, MatIconModule, MatOptionModule,MatDividerModule,
  MatSelectModule, MatInputModule, MatCard, MatCardModule, MatTooltipModule, MatSortModule, MatBadgeModule
} from '@angular/material';
import { FormsModule, FormBuilder, ControlContainer } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MonthListViewComponent } from './listview/monthlistview.component';
import { MonthRoutingModule } from './month-routing.module';
import { MonthDetailViewComponent } from './detailview/monthdetailview.component';
//import { LoginPageComponent } from './loginpage/loginpage.component';
import { MonthData } from './service/monthview';
import { MonthService } from './service/monthview.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,MatIconModule,MatBadgeModule,MatDividerModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatTableModule, MatSortModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatCardModule, MatTooltipModule, MatProgressSpinnerModule, MatPaginatorModule,
    MonthRoutingModule

  ],
  declarations: [
    MonthListViewComponent,
    MonthDetailViewComponent
  ],

  providers: [MonthService]

})
export class MonthModule { }
