import { Component, OnInit } from '@angular/core';
import { HOME_LOOK } from '../data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
  
  data = HOME_LOOK;
}
