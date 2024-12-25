import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../_services/Employee Service/employee.service';
import { Employee } from '../../_Model/masterModel';
import { MatTableDataSource } from '@angular/material/table';
import { retry } from 'rxjs';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-custom-table',
  standalone: false,

  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent implements OnInit {

  emp_list: any = [];
  // Employee[] = [];
  dataSource!: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['name', 'age', 'email', 'username', 'address', 'number'];
  displayedColumnsFilters: string[] = ['f-name', 'f-age', 'f-email', 'f-username', 'f-address', 'f-number'];

  emptyValues = {
    name: '', age: '', email: '', username: '', address: '', number: ''
  };

  constructor(public emp_service: EmployeeService) { }

  ngOnInit(): void {
  // debugger
    // this.getData();
    this.emp_list = this.emp_service.empDetails()[0];
    this.dataSource = new MatTableDataSource(this.emp_list.employee);
    this.dataSource.filterPredicate = this.customFilterPrediction();
  }
  getData() {
    this.emp_service.getEmp().subscribe(jsonData => {
      this.emp_list = jsonData;
     
    });
  }

  filter(columnName: string, element: any) {   
    console.log(columnName);
     
    if (columnName === 'name' || columnName === 'age' || columnName === 'email' || columnName === 'username' || columnName === 'address' || columnName === 'number') {
      this.emptyValues[columnName] = element.target.value.trim().toLowerCase();
      this.dataSource.filter = JSON.stringify(this.emptyValues);
    }
  }

  customFilterPrediction() {
    const filterPredicate  = (data: Employee, emptyValues: string): boolean => {
      let searchString = JSON.parse(emptyValues);
      return data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1 &&
        data.age.toString().trim().toLowerCase().indexOf(searchString.age.toLowerCase()) !== -1 &&
        data.email.toString().trim().toLowerCase().indexOf(searchString.email.toLowerCase()) !== -1 &&
        data.username.toString().trim().toLowerCase().indexOf(searchString.username.toLowerCase()) !== -1 &&
        data.address.toString().trim().toLowerCase().indexOf(searchString.address.toLowerCase()) !== -1 &&
        data.number.toString().trim().toLowerCase().indexOf(searchString.number.toLowerCase()) !== -1

    }
    return filterPredicate ;
  }

}
