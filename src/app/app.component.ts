import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ahmed Yasser — Portfolio';
}
