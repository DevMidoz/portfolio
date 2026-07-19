import { Component, HostListener, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { ThemeService } from '../../core/services/theme.service';
import { PROFILE } from '../../data/resume-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly profile = PROFILE;
  readonly isScrolled = signal(false);

  constructor(readonly themeService: ThemeService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }
}
