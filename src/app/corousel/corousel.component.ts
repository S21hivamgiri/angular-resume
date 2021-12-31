import { Component } from '@angular/core';
import { OTHER_ACTIVITY } from '../data';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent {
  data=OTHER_ACTIVITY;
}
