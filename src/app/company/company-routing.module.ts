import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListViewComponent } from './listview/comapnylistview.component';
import { CompanyDetailViewComponent } from './detailview/companydetailview.component';




const userRoutes: Routes = [
  { path:'companies',component:CompanyListViewComponent},
  { path:'company/:id',component:CompanyDetailViewComponent}

];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class CompanyRoutingModule {}
