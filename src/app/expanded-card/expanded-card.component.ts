import { Component, OnInit,Input} from '@angular/core';
import { expansionCard} from '../constant'
@Component({
  selector: 'app-expanded-card',
  templateUrl: './expanded-card.component.html',
  styleUrls: ['./expanded-card.component.scss']
})
export class ExpandedCardComponent implements OnInit {
  @Input() data: expansionCard;
  constructor() { }

  ngOnInit(): void {
  }

}
