import { Component } from '@angular/core';
import { SKILL_DATA} from './../data';
import { dropboxCombo } from './../constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data: dropboxCombo = SKILL_DATA;
  constructor() {}

}
