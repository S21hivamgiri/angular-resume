import { Component, Input } from '@angular/core';

import { Listcard, Accordion } from '../constant';
@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent {
  @Input() data: Listcard;
  @Input() parentId: 'string';
  constructor() {
   }
}
