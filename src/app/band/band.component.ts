import { Component, OnInit } from '@angular/core';
import { OBJECTIVE } from './../data';
import { objective } from './../constant';


@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {
  data:objective=OBJECTIVE;
  constructor() { }

  ngOnInit(): void {
  }

}
