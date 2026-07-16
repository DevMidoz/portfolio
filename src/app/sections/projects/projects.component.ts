import { Component, OnInit, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { GithubRepo, GithubService } from '../../core/services/github.service';
import { FEATURED_REPOS, PROFILE } from '../../data/resume-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [IconComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  readonly profile = PROFILE;
  readonly repos = signal<GithubRepo[]>([]);
  readonly loading = signal(true);
  readonly errored = signal(false);

  readonly fallbackRepos = FEATURED_REPOS.map((name) => ({
    name,
    html_url: `${PROFILE.github}/${name}`,
  }));

  constructor(private readonly githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getPublicRepos(this.profile.githubUser).subscribe({
      next: (repos) => {
        this.repos.set(repos.slice(0, 6));
        this.loading.set(false);
      },
      error: () => {
        this.errored.set(true);
        this.loading.set(false);
      },
    });
  }
}
