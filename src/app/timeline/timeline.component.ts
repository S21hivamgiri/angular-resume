import { Component } from '@angular/core';
import { TIME_LINE } from "../data";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  data = TIME_LINE;

  hideContent(id: string) {
    const element = document.getElementById(id);
    if (element.classList.contains('d-none')) {
      element.classList.remove('d-none');
      element.classList.add('d-block');
    } else {
      element.classList.add('d-none');
      element.classList.remove('d-block');
    }
  }
}
