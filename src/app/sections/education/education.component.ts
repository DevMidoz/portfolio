import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PanelScrollDirective } from '../../core/directives/panel-scroll.directive';
import { EDUCATION, CERTIFICATIONS } from '../../data/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [IconComponent, RevealDirective, PanelScrollDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
}
