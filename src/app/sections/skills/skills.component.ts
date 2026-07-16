import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SKILLS } from '../../data/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skillGroups = SKILLS;
}
