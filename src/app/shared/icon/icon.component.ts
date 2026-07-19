import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const ICONS: Record<string, string> = {
  github:
    '<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.7.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>',
  mail:
    '<path d="M2.5 5.5h19a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-19a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M3 6.5 12 13l9-6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  phone:
    '<path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2a1 1 0 0 1 1.05-.24c1.2.42 2.5.66 3.85.66a1 1 0 0 1 1 1v3.4a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4.7a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.35.24 2.65.66 3.85a1 1 0 0 1-.24 1.05L6.6 10.8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  location:
    '<path d="M12 21.5s-7-6.1-7-11.4a7 7 0 1 1 14 0c0 5.3-7 11.4-7 11.4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" stroke-width="1.6"/>',
  download:
    '<path d="M12 3v12.5M12 15.5 7.5 11M12 15.5 16.5 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 17.5v2a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  sun:
    '<circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  moon:
    '<path d="M20.5 14.6A8.5 8.5 0 1 1 9.4 3.5a7 7 0 0 0 11.1 11.1Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
  menu:
    '<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  close:
    '<path d="M5 5l14 14M19 5 5 19" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  external:
    '<path d="M9 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 4.5H19.5V10.5M19 5 10.5 13.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  star:
    '<path d="M12 3.2l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.8L12 3.2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  fork:
    '<circle cx="6" cy="5" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="5" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="19" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 7v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7M12 13v4" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  code:
    '<path d="M9 6 3.5 12 9 18M15 6l5.5 6-5.5 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  layers:
    '<path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M2.5 12 12 17l9.5-5M2.5 16 12 21l9.5-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  box:
    '<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  database:
    '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 5.5V18a7.5 2.8 0 0 0 15 0V5.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 11.8a7.5 2.8 0 0 0 15 0" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  tool:
    '<path d="M14.7 6.3a3.8 3.8 0 0 1 5 5L11 20l-4.3.6.6-4.3 7.4-7.4a3.8 3.8 0 0 1 0-2.6Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  'check-circle':
    '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 12.3l2.3 2.3 4.7-5.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  'git-branch':
    '<circle cx="6" cy="5" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="19" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="18" cy="9" r="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 7v10M6 12a6 6 0 0 0 6-6" fill="none" stroke="currentColor" stroke-width="1.5"/>',
  cpu:
    '<rect x="6" y="6" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="9.5" y="9.5" width="5" height="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 3v2.3M12 3v2.3M15 3v2.3M9 18.7V21M12 18.7V21M15 18.7V21M3 9h2.3M3 12h2.3M3 15h2.3M18.7 9H21M18.7 12H21M18.7 15H21" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
  'chevron-right':
    '<path d="M9 5.5 15.5 12 9 18.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  'arrow-down':
    '<path d="M12 4v15.5M12 19.5 5.5 13M12 19.5 18.5 13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
  briefcase:
    '<rect x="3" y="7.5" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 12.5h18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  'graduation-cap':
    '<path d="M2.5 9.5 12 5l9.5 4.5-9.5 4.5-9.5-4.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.5 11.7v4.3c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8v-4.3M20.5 9.5v6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
  award:
    '<circle cx="12" cy="8.5" r="5.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8.7 13.2 7 21l5-2.6 5 2.6-1.7-7.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
  server:
    '<rect x="4" y="4" width="16" height="6.5" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="13.5" width="16" height="6.5" rx="1.6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="7.6" cy="7.25" r="0.9" fill="currentColor"/><circle cx="7.6" cy="16.75" r="0.9" fill="currentColor"/>',
  send:
    '<path d="M21 3 3 10.5l7 2.7 2.7 7L21 3Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M10 13.2 21 3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  home:
    '<path d="M4 11.5 12 4l8 7.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-5.5h4V20h3a1 1 0 0 0 1-1v-9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
  user:
    '<circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 20c1-3.6 4-5.6 7.5-5.6s6.5 2 7.5 5.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
  folder:
    '<path d="M3.5 7A1.5 1.5 0 0 1 5 5.5h4.2l2 2H19A1.5 1.5 0 0 1 20.5 9v8A1.5 1.5 0 0 1 19 18.5H5A1.5 1.5 0 0 1 3.5 17V7Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
};

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 24 24"
    fill="none"
    [innerHTML]="path"
    aria-hidden="true"
  ></svg>`,
  styles: [
    `
      :host {
        display: inline-flex;
        line-height: 0;
      }
      svg {
        display: block;
      }
    `,
  ],
})
export class IconComponent {
  @Input() name = 'code';
  @Input() size = 20;

  constructor(private readonly sanitizer: DomSanitizer) {}

  get path(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(ICONS[this.name] ?? ICONS['code']);
  }
}
