import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekListViewComponent } from './listview/weeklistview.component';
import { WeekDetailViewComponent } from './detailview/weekdetailview.component';




const userRoutes: Routes = [
  { path:'weeks',component:WeekListViewComponent},
  { path:'week/:id',component:WeekDetailViewComponent}

];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class WeekRoutingModule {}
