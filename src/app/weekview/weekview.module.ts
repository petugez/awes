import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule,MatCheckboxModule,
        MatProgressSpinnerModule,MatPaginatorModule, 
        MatFormField, MatFormFieldModule, MatRadioModule, MatIconModule, MatOptionModule, MatSelectModule, MatInputModule, MatCard, MatCardModule, MatTooltipModule, MatSortModule} from '@angular/material';
import { FormsModule, FormBuilder, ControlContainer }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { WeekListViewComponent } from './listview/weeklistview.component';
import { WeekRoutingModule } from './week-routing.module';
import { WeekDetailViewComponent } from './detailview/weekdetailview.component';
//import { LoginPageComponent } from './loginpage/loginpage.component';
import {WeekData} from './service/weekview';
import {WeekService} from './service/weekview.service';
// import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // FlexModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatInputModule,MatTableModule,MatSortModule,
    MatFormFieldModule,MatOptionModule,MatSelectModule,MatCardModule,MatTooltipModule,MatProgressSpinnerModule,MatPaginatorModule,
    WeekRoutingModule

  ],
  declarations: [
    WeekListViewComponent,
    WeekDetailViewComponent
  ],
      
  providers:[WeekService]
  
})
export class WeekModule { }
