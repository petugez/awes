import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListViewComponent } from './listview/userlistview.component';
import { UserDetailViewComponent } from './detailview/userdetailview.component';




const userRoutes: Routes = [
  { path:'users',component:UserListViewComponent},
  { path:'user/:id',component:UserDetailViewComponent}

];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
