import { Component, Input } from '@angular/core';
import { LogServicesService } from '../../../_services/log-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  standalone: false,
  
  templateUrl: './resetpass.component.html',
  styleUrl: './resetpass.component.scss'
})
export class ResetpassComponent {

constructor (public serviceUsername: LogServicesService, public router:Router) {}

   Questions: string = 'Security \nQuestions'
  
  bgColor='btn btn-primary';
  bgNewColor= 'white'
  isActive = false;
  backGroundColor = 'transparent';
  changeLink = '/login';
  
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

  checkvalue() {
    if (!this.isActive){
      this.isActive = true
      alert('Answer Validated')
    } else if (this.isActive = true){
    this.isActive = false
    alert('Password Reset Successfull.')
    this.router.navigateByUrl('/login')
    }
    
  }



choose: questions[] = [

  {ques: 'what is your school name?', ques_value: 1},
  {ques: 'what is your favorite place?', ques_value: 2},
  {ques: 'what is your pet name?', ques_value: 3},
]

}

interface questions {
  ques: string; ques_value : number;
}