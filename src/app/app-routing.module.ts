import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { ResetpassComponent } from './Login/resetpass/resetpass.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';
import { ChildComponent } from './Dashboard/child/child.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'reset', component: ResetpassComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
