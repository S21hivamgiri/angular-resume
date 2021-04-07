import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-chart',
  templateUrl: './horizontal-chart.component.html',
  styleUrls: ['./horizontal-chart.component.scss']
})
export class HorizontalChartComponent {
  @Input() score:number;
  constructor() { }
  getClass(i:number)
  {
    this.bgcolor = (i > 4.5) ? '#ffc107' : (i > 4) ? '#28a745' :'#dc3545' ;
   return( Math.round((i * 100) / 5)+'%')
  }
  bgcolor: string ;
}
