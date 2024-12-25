import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { ResetpassComponent } from './Login/resetpass/resetpass.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { ParentComponent } from './Parent-Child/parent/parent.component';
import { ChildComponent } from './Parent-Child/child/child.component';
import { ContainerComponent } from './Parent-Child/container/container.component';


const routes: Routes = [
  {
    path: '', component: CustomTableComponent, pathMatch: 'full'
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
