import { Component, Input } from '@angular/core';
import { ExpansionCard } from '../constant'
@Component({
  selector: 'app-expanded-card',
  templateUrl: './expanded-card.component.html',
  styleUrls: ['./expanded-card.component.scss']
})
export class ExpandedCardComponent {
  @Input() data: ExpansionCard;
}
