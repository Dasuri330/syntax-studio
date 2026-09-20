import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavbarComponent } from '../../../components/navbar.component/navbar.component';
import { FeaturedProjectsComponent } from '../featured-projects.component/featured-projects.component';
import { CtaComponent } from '../../../components/cta.component/cta.component';
import { techLogo } from '../../../models/techlogo';
import { experience } from '../../../models/experience';
import { Skill } from '../../../models/skill';
import { Stat } from '../../../models/stat';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NavbarComponent, FeaturedProjectsComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private http = inject(HttpClient);

  skills = toSignal(this.http.get<Skill[]>('/data/skills.json'));
  techLogos = toSignal(this.http.get<techLogo[]>('/data/tech-logos.json'));
  experiences = toSignal(this.http.get<experience[]>('/data/experiences.json'));
  stats = toSignal(this.http.get<Stat[]>('/data/stats.json'));
}
