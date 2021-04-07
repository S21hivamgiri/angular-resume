import { Component, OnInit } from '@angular/core';
import { HOME_LOOK } from './../data';
import { homeLook } from './../constant';

@Component({
  selector: 'app-home-look',
  templateUrl: './home-look.component.html',
  styleUrls: ['./home-look.component.scss']
})
export class HomeLookComponent implements OnInit {
  data:homeLook=HOME_LOOK;
  constructor() { }

  ngOnInit(): void {
  }

}
