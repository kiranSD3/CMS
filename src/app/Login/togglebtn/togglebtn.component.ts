import { Component } from '@angular/core';

@Component({
  selector: 'app-togglebtn',
  standalone: false,
  
  templateUrl: './togglebtn.component.html',
  styleUrl: './togglebtn.component.scss'
})
export class TogglebtnComponent {
  bgColor='btn btn-primary';
  bgNewColor= 'white'
  isActive = true;
  backGroundColor = 'transparent';
  changeLink=''
  userName: string = ''
  toggleProperty(button : string) {
  if (button == 'btn1'){
    this.bgColor = 'btn btn-primary';
    this.bgNewColor = 'white';
    this.changeLink ='/login'
  }else {
    this.bgColor = 'white';
    this.bgNewColor = 'btn btn-primary';
    this.changeLink = '/reset'
  }
  }

}
