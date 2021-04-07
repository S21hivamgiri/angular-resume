import { Component, OnInit } from '@angular/core';
import { dropboxCombo } from '../constant';
import { CONTACT_DATA } from '../data';

@Component({
  selector: 'app-horz-tab',
  templateUrl: './horz-tab.component.html',
  styleUrls: ['./horz-tab.component.scss']
})
export class HorzTabComponent implements OnInit {
  contactData: dropboxCombo = CONTACT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
