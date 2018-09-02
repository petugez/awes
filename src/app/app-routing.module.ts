import { NgModule }             from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';


import { LoginPageComponent } from './loginpage/loginpage.component';
import { TestComponent } from './test/test.component';
import { AuthGuardService } from './security/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path:'login',component:LoginPageComponent},
  { path:'test',component:TestComponent,canActivate:[AuthGuardService]}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
