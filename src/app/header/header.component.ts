import { Component } from '@angular/core';
import { ABOUT_DATA } from '../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}
  aboutData=ABOUT_DATA;
}
