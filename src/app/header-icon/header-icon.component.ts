import { Component, Input, OnInit } from '@angular/core';
import { headerIcon} from '../constant'
@Component({
  selector: 'app-header-icon',
  templateUrl: './header-icon.component.html',
  styleUrls: ['./header-icon.component.scss']
})
export class HeaderIconComponent implements OnInit {
  @Input() data: headerIcon;
  @Input() count?: number;
  constructor() {}
  ngOnInit(): void {
  }
  topCalculation() {
    return (20 + this.count * 60);
  }
  hideContent(count:number) {
    const element = document.getElementById('tab-element-'+count);
    if (element.classList.contains('tab-elements')) {
      element.classList.remove('tab-elements');
    } else {
      element.classList.add('tab-elements');
    }
  }
}
