import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  archived: boolean;
  updated_at: string;
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly apiBase = 'https://api.github.com';

  constructor(private readonly http: HttpClient) {}

  getPublicRepos(username: string): Observable<GithubRepo[]> {
    const url = `${this.apiBase}/users/${username}/repos?per_page=100&sort=updated`;
    return this.http.get<GithubRepo[]>(url).pipe(
      map((repos) =>
        repos
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => {
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          })
      )
    );
  }
}
