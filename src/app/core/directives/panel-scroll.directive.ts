import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPanelScroll]',
  standalone: true,
})
export class PanelScrollDirective {
  constructor(private readonly el: ElementRef<HTMLElement>) {}

  @HostListener('click')
  onClick(): void {
    const panelBody = this.el.nativeElement.closest('.dashboard-panel')?.querySelector('.panel-body');
    panelBody?.scrollBy({ top: 180, behavior: 'smooth' });
  }
}
