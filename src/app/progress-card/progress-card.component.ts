import { Component, OnInit, Input } from '@angular/core';
import { progressCard,  } from './../constant';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent implements OnInit {

  constructor() { }

  @Input() data: progressCard;
  ngOnInit(): void {
  }

}
