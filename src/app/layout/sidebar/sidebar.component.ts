import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  readonly items: SidebarItem[] = [
    { id: 'top', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'user' },
    { id: 'skills', label: 'Skills', icon: 'box' },
    { id: 'experience', label: 'Experience', icon: 'briefcase' },
    { id: 'education', label: 'Education', icon: 'graduation-cap' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  readonly active = signal('top');

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = this.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          this.active.set(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
