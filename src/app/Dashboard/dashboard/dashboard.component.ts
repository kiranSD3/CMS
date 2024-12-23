import { Component } from '@angular/core';
import { LogService } from '../../../_services/log.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor (public log: LogService) {}

  add() {
    this.log.click()
  }
}
