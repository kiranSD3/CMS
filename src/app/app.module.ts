import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ResetpassComponent } from './Login/resetpass/resetpass.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TogglebtnComponent } from './Login/togglebtn/togglebtn.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Dashboard/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LogServicesService } from '../_services/log-services.service';
import { LogService } from '../_services/log.service';
import {ReactiveFormsModule} from '@angular/forms'
import { provideHttpClient } from '@angular/common/http';
import { CustomTableComponent } from './custom-table/custom-table.component';
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {   MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ParentComponent } from './Parent-Child/parent/parent.component';
import { ChildComponent } from './Parent-Child/child/child.component';
import { ContainerComponent } from './Parent-Child/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpassComponent,
    TogglebtnComponent,
    DashboardComponent,
    NavbarComponent,
    ChildComponent,
    CustomTableComponent,
    ParentComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    RouterLink,
    RouterOutlet,
    FormsModule ,
    ReactiveFormsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule
    
 
  ],
  providers: [LogServicesService,LogService,
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(), provideHttpClient()
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
