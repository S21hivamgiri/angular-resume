import { Component, Input } from '@angular/core';
import {DropboxCombo} from '../constant';
@Component({
  selector: 'app-dropdown-combo',
  templateUrl: './dropdown-combo.component.html',
  styleUrls: ['./dropdown-combo.component.scss']
})
export class DropdownComboComponent {
  @Input() data: DropboxCombo;
}
