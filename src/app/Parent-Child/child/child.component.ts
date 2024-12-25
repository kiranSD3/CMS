import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {

@Input() Username:any;
@Input() Name:any;
@Input() Designation:any;
@Input() Contact:any;

@Input() empObj:any;

// @Input() test= [];


  ngOnInit(): void {
    
  }
}
