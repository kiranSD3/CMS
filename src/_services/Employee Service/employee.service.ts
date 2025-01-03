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

empDetails(){
  return [
    {
      "employee": [
          {
              "name": "John Doe",
              "age": "28",
              "email": "johndoe@example.com",
              "username": "john_doe",
              "address": "123 Main Street, New York, NY",
              "number": "555-1234"
          },
          {
              "name": "Jane Smith",
              "age": "34",
              "email": "janesmith@example.com",
              "username": "jane_smith",
              "address": "456 Oak Avenue, Los Angeles, CA",
              "number": "555-5678"
          },
          {
              "name": "Michael Johnson",
              "age": "40",
              "email": "mjohnson@example.com",
              "username": "michael_j",
              "address": "789 Pine Lane, Chicago, IL",
              "number": "555-8765"
          },
          {
              "name": "Emily Brown",
              "age": "23",
              "email": "emilybrown@example.com",
              "username": "emily_b",
              "address": "321 Elm Street, Houston, TX",
              "number": "555-4321"
          },
          {
              "name": "William Davis",
              "age": "30",
              "email": "wdavis@example.com",
              "username": "will_d",
              "address": "654 Maple Drive, Phoenix, AZ",
              "number": "555-3456"
          },
          {
              "name": "Sophia Miller",
              "age": "27",
              "email": "sophiam@example.com",
              "username": "sophia_m",
              "address": "987 Birch Road, Philadelphia, PA",
              "number": "555-7890"
          },
          {
              "name": "James Wilson",
              "age": "35",
              "email": "jwilson@example.com",
              "username": "james_w",
              "address": "123 Cedar Court, San Antonio, TX",
              "number": "555-2345"
          },
          {
              "name": "Olivia Moore",
              "age": "29",
              "email": "oliviamoore@example.com",
              "username": "olivia_m",
              "address": "456 Spruce Terrace, Dallas, TX",
              "number": "555-6789"
          },
          {
              "name": "Benjamin Taylor",
              "age": "41",
              "email": "btaylor@example.com",
              "username": "ben_t",
              "address": "789 Aspen Street, San Diego, CA",
              "number": "555-8760"
          },
          {
              "name": "Isabella Anderson",
              "age": "26",
              "email": "isabella@example.com",
              "username": "isabella_a",
              "address": "321 Redwood Circle, San Jose, CA",
              "number": "555-9876"
          },
          {
              "name": "Henry Thomas",
              "age": "38",
              "email": "henryt@example.com",
              "username": "henry_t",
              "address": "654 Cherry Avenue, Austin, TX",
              "number": "555-5432"
          },
          {
              "name": "Mia White",
              "age": "24",
              "email": "miawhite@example.com",
              "username": "mia_w",
              "address": "987 Willow Street, Jacksonville, FL",
              "number": "555-6543"
          },
          {
              "name": "Alexander Harris",
              "age": "31",
              "email": "alexh@example.com",
              "username": "alex_h",
              "address": "123 Dogwood Lane, Fort Worth, TX",
              "number": "555-8764"
          },
          {
              "name": "Charlotte Martin",
              "age": "28",
              "email": "charlottem@example.com",
              "username": "charlotte_m",
              "address": "456 Cypress Court, Columbus, OH",
              "number": "555-7896"
          },
          {
              "name": "Ethan Lee",
              "age": "36",
              "email": "ethanlee@example.com",
              "username": "ethan_l",
              "address": "789 Magnolia Boulevard, Charlotte, NC",
              "number": "555-3457"
          },
          {
              "name": "Amelia Walker",
              "age": "33",
              "email": "ameliaw@example.com",
              "username": "amelia_w",
              "address": "321 Palm Drive, San Francisco, CA",
              "number": "555-1237"
          },
          {
              "name": "Lucas Hall",
              "age": "39",
              "email": "lucash@example.com",
              "username": "lucas_h",
              "address": "654 Sycamore Road, Indianapolis, IN",
              "number": "555-6781"
          },
          {
              "name": "Harper Young",
              "age": "25",
              "email": "harpery@example.com",
              "username": "harper_y",
              "address": "987 Poplar Lane, Seattle, WA",
              "number": "555-7892"
          },
          {
              "name": "Logan King",
              "age": "32",
              "email": "loganking@example.com",
              "username": "logan_k",
              "address": "123 Beech Court, Denver, CO",
              "number": "555-6548"
          },
          {
              "name": "Ava Scott",
              "age": "22",
              "email": "avas@example.com",
              "username": "ava_s",
              "address": "456 Chestnut Avenue, Washington, DC",
              "number": "555-3459"
          }
      ]
    }
    
  ]
}
}
