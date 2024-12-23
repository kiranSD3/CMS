import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  counter:number=100;

  click() {
    this.counter++;
  }



}

