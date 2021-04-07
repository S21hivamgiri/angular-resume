import { Component, OnInit, Input } from '@angular/core';
import { image } from '../constant'
@Component({
  selector: 'app-skill-img',
  templateUrl: './skill-img.component.html',
  styleUrls: ['./skill-img.component.scss']
})
export class SkillImgComponent implements OnInit {
  @Input() score: number;
  @Input() skillImage: image;

  getArray(i:number, height:string){ 
    this.clipped = Math.floor(parseInt(height, 10) * (i-Math.floor(i)));
    return Array(Math.floor(i))};
  clipped:number;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
