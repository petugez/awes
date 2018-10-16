import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatTableModule, MatCheckboxModule,
  MatProgressSpinnerModule, MatPaginatorModule,MatDatepickerModule,
  MatFormField, MatFormFieldModule, MatRadioModule, MatIconModule, MatOptionModule, MatSelectModule, MatInputModule, MatCard, MatCardModule, MatTooltipModule, MatSortModule
} from '@angular/material';
import { FormsModule, FormBuilder, ControlContainer } from '@angular/forms';


import { LeaveRequestListViewComponent } from './listview/leaverequestlistview.component';
import { LeaveRequestRoutingModule } from './leaverequest-routing.module';
import { LeaveRequestDetailViewComponent } from './detailview/leaverequestdetailview.component';

import { LeaveRequestService } from './service/leaverequest.service'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,MatDatepickerModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatCardModule, MatTooltipModule, MatProgressSpinnerModule, MatPaginatorModule,
    LeaveRequestRoutingModule

  ],
  declarations: [
    LeaveRequestDetailViewComponent,
    LeaveRequestListViewComponent
  ],

  providers: [LeaveRequestService]

})
export class LeaveRequestModule { }
