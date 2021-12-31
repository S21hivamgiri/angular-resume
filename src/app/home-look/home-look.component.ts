import { Component, OnInit } from '@angular/core';
import { HOME_LOOK } from './../data';

@Component({
  selector: 'app-home-look',
  templateUrl: './home-look.component.html',
  styleUrls: ['./home-look.component.scss']
})
export class HomeLookComponent {
  data=HOME_LOOK;
}
