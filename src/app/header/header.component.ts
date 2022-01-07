import { Component, OnInit } from '@angular/core';
import { ABOUT_DATA } from '../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  aboutData = ABOUT_DATA;
  
  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
}
