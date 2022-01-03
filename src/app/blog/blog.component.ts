import { Component } from '@angular/core';
import { HOME_LOOK } from '../data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  data = HOME_LOOK;
}
