import { Component } from '@angular/core';
import { CONTACT_DATA } from '../data';

@Component({
  selector: 'app-horz-tab',
  templateUrl: './horz-tab.component.html',
  styleUrls: ['./horz-tab.component.scss']
})
export class HorzTabComponent {
  contactData = CONTACT_DATA;
}
