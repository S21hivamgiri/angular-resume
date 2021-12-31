import { Component, Input} from '@angular/core';
import {Accordion} from '../constant';

@Component({
  selector: 'app-list-accordion',
  templateUrl: './list-accordion.component.html',
  styleUrls: ['./list-accordion.component.scss']
})
export class ListAccordionComponent {
  @Input() data: Accordion;
}
