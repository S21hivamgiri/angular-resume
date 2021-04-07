import { Component, OnInit } from '@angular/core';
import { timeline } from "../constant";
import { TIME_LINE } from "../data";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  data:timeline= TIME_LINE;

  constructor() { }
  hideContent(id:string)
  {
    const element=document.getElementById(id);
    if(element.classList.contains('d-none'))
    {
      element.classList.remove('d-none');
      element.classList.add('d-block');
    } else {
      element.classList.add('d-none');
      element.classList.remove('d-block');
    }
  }
  ngOnInit(): void {
  }

}
