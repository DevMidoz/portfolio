import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { PROFILE } from '../../data/resume-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
}
