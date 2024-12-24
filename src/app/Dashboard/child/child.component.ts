import { Component, Input } from '@angular/core';
import { RegisterService } from '../../../_services/register service/register.service';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

 @Input() Username:string=''

constructor (public regsit: RegisterService) {}

tabledata: tabledatas[]= [
  {heading: 'Username', data_user: 'Akaza', data_pass: '123', data_email: 'Akaza@gmail.com', data_number: 98236421, email_link: ''},
  {heading: 'Password', data_user: 'Tanjiro', data_pass: '123', data_email: 'Akaza@gmail.com', data_number: 98236421, email_link: ''},
  {heading: 'Email', data_user: 'Nezuko', data_pass: '123', data_email: 'Akaza@gmail.com', data_number: 98236421, email_link: ''},
  {heading: 'Number', data_user: 'Prime', data_pass: '123', data_email: 'Akaza@gmail.com', data_number: 98236421, email_link: ''}
]

}

interface tabledatas{
heading: string; data_user: string; data_pass: string; data_number: number; data_email: string; email_link: string;

}
