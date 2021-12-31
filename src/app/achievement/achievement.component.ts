import { Component } from '@angular/core';
import { ACHIEVEMENTS } from '../data';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent {
  data = ACHIEVEMENTS;
}
