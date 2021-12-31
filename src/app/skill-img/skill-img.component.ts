import { Component, Input } from '@angular/core';
import { Image } from '../constant';

@Component({
  selector: 'app-skill-img',
  templateUrl: './skill-img.component.html',
  styleUrls: ['./skill-img.component.scss']
})
export class SkillImgComponent {
  @Input() score: number;
  @Input() skillImage: Image;
  clipped: number;

  getArray(i: number, height: string) {
    this.clipped = Math.floor(parseInt(height, 10) * (i - Math.floor(i)));
    return Array(Math.floor(i))
  };
}
