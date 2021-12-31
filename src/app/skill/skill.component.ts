import { Component } from '@angular/core';
import { SKILL_CHIP } from '../data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skills=SKILL_CHIP;
}
