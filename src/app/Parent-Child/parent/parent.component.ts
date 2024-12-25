import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

empusername: string = '';
empname:string = '';
empdesignation = '';
empcontact = '';

empObj = {"username": "", "name": "", "designation": "", "contact": ""};

  getEmployee(username:any, name:any, designation:any, contact:any){
this.empusername = username;
this.empname = name;
this.empdesignation = designation;
this.empcontact = contact;
this.empObj = {"username": username, "name": name, "designation": designation, "contact": contact};

}

}
