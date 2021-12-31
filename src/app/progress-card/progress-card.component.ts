import { Component, Input } from '@angular/core';
import { ProgressCard,  } from './../constant';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent {
  @Input() data: ProgressCard;
}
