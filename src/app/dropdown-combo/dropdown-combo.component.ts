import { Component, OnInit, Input } from '@angular/core';
import {dropboxCombo} from '../constant';
@Component({
  selector: 'app-dropdown-combo',
  templateUrl: './dropdown-combo.component.html',
  styleUrls: ['./dropdown-combo.component.scss']
})
export class DropdownComboComponent implements OnInit {
  @Input() data: dropboxCombo;
  constructor() {}
  ngOnInit(): void {
  }

}
