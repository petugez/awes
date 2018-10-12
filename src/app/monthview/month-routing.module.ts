import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthListViewComponent } from './listview/monthlistview.component';
import { MonthDetailViewComponent } from './detailview/monthdetailview.component';




const userRoutes: Routes = [
  { path:'months',component:MonthListViewComponent},
  { path:'month/:id',component:MonthDetailViewComponent}

];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class MonthRoutingModule {}
