import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PanelScrollDirective } from '../../core/directives/panel-scroll.directive';
import { PROFILE } from '../../data/resume-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconComponent, RevealDirective, PanelScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = PROFILE;

  readonly channels = [
    { icon: 'mail', label: 'Email', value: this.profile.email, href: `mailto:${this.profile.email}` },
    { icon: 'phone', label: 'Phone', value: this.profile.phone, href: `tel:${this.profile.phone.replace(/-/g, '')}` },
    { icon: 'location', label: 'Location', value: this.profile.location, href: null },
    { icon: 'github', label: 'GitHub', value: `@${this.profile.githubUser}`, href: this.profile.github },
  ];
}
