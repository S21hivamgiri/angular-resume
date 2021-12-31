import { Component } from '@angular/core';
import { OBJECTIVE } from './../data';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent{
  data=OBJECTIVE;
}
