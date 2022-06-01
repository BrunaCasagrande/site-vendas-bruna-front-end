import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'


const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path:'', component:LayoutComponent, children: [
    { path: 'home', component: HomeComponent, canActivate : [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
