import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestListViewComponent } from './listview/leaverequestlistview.component';
import { LeaveRequestDetailViewComponent } from './detailview/leaverequestdetailview.component';




const leaveRequestRoutes: Routes = [
  { path:'leaverequests',component:LeaveRequestListViewComponent},
  { path:'leaverequest/:id',component:LeaveRequestDetailViewComponent}

];

@NgModule({
  imports: [ RouterModule.forChild(leaveRequestRoutes) ],
  exports: [ RouterModule ]
})
export class LeaveRequestRoutingModule {}
