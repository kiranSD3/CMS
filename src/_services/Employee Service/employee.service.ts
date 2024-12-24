import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../_Model/masterModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

getEmp(){
  return this.http.get<Employee[]>('http://localhost:3000/employee')
}

}
