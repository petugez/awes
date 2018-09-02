import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginPageComponent } from './loginpage/loginpage.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:'login',component:LoginPageComponent}
  { path:'test',component:TestComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
