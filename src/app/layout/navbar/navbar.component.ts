import { Component, HostListener, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { ThemeService } from '../../core/services/theme.service';
import { PROFILE } from '../../data/resume-data';

interface NavLink {
  label: string;
  href: string;
}

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
  readonly isMenuOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  constructor(readonly themeService: ThemeService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
