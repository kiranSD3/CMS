import { Component } from '@angular/core';
import { LogService } from '../../../_services/log.service';
import { log } from 'node:console';

@Component({
  selector: 'app-navbar',
  standalone: false,
  providers: [LogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor (public log:LogService) {}

newAdd() {
  this.log.click();
}

}
