import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LogServicesService } from '../../../_services/log-services.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor (public router:Router, public getValue: LogServicesService) {}

bgColor='btn btn-primary';
bgNewColor= 'white'
isActive = true;
backGroundColor = 'transparent';
changeLink = '/login';
warningmsg : boolean = false;
username : string = '';



toggleProperty(button : string) {
if (button == 'btn1'){
  this.bgColor = 'btn btn-primary';
  this.bgNewColor = 'white';
  this.changeLink = '/login'
  
}else {
  this.bgColor = 'white';
  this.bgNewColor = 'btn btn-primary';
  this.changeLink = '/reset'

}
}

validate(){
  if (this.username != null) {
    this.warningmsg = true 
   
    
  }else {
    this.warningmsg = false;
    alert('Success')
    
    // this.router.navigateByUrl('dashboard')
  }
}

}

