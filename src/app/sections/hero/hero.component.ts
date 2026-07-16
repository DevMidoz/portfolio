import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { PROFILE, EXPERIENCE } from '../../data/resume-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly typedText = signal('');
  readonly yearsExperience = this.computeYearsExperience();

  readonly stats = [
    { label: 'Years of experience', value: `${this.yearsExperience}+` },
    { label: 'Companies worked with', value: `${EXPERIENCE.length}` },
    { label: 'Core stack', value: 'Angular & Vue' },
  ];

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeLoop(): void {
    const roles = this.profile.roles;
    const currentRole = roles[this.roleIndex];

    if (!this.deleting) {
      this.charIndex++;
      this.typedText.set(currentRole.slice(0, this.charIndex));

      if (this.charIndex === currentRole.length) {
        this.deleting = true;
        this.timeoutId = setTimeout(() => this.typeLoop(), 1600);
        return;
      }
    } else {
      this.charIndex--;
      this.typedText.set(currentRole.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % roles.length;
      }
    }

    const speed = this.deleting ? 40 : 75;
    this.timeoutId = setTimeout(() => this.typeLoop(), speed);
  }

  private computeYearsExperience(): number {
    const firstJob = EXPERIENCE[EXPERIENCE.length - 1];
    const startYear = Number(firstJob.start.split(' ').pop());
    const currentYear = new Date().getFullYear();
    return Math.max(1, currentYear - startYear);
  }
}
