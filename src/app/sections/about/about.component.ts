import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE } from '../../data/resume-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile = PROFILE;

  readonly highlights = [
    { title: 'Clean Architecture', desc: 'SOLID principles and scalable, maintainable component design.' },
    { title: 'Test-Driven', desc: 'Jest & Jasmine test suites that keep releases confident and safe.' },
    { title: 'Agile Collaboration', desc: 'Tight feedback loops with cross-functional, product-driven teams.' },
    { title: 'AI-Augmented Workflow', desc: 'Cursor, Claude Code & Antigravity to ship faster without sacrificing quality.' },
  ];
}
