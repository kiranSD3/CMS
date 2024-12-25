import { Component } from '@angular/core';
import { LogService } from '../../../_services/log.service';
import { LogServicesService } from '../../../_services/log-services.service';
import { RegisterService } from '../../../_services/register service/register.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor (public log: LogService, public name: LogServicesService, public regis: RegisterService) {}


  add() {
    this.log.click()
  }

  register = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.minLength(5)),
    email: new FormControl("", Validators.email),
    number: new FormControl("", Validators.required)

  });

  getValue(){
    console.log(this.register.value);
    alert('Employee Registered');
    this.register.reset();
    
  }

  get validUser(){
   return this.register.get("username");
  }

  get validEmail() {
   return this.register.get("email");
  }

  get validPwd() {
    return this.register.get("password");
   }
}
