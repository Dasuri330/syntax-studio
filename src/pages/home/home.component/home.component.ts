import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavbarComponent } from '../../../components/navbar.component/navbar.component';
import { FeaturedProjectsComponent } from '../featured-projects.component/featured-projects.component';
import { techLogo } from '../../../models/techlogo';
import { experience } from '../../../models/experience';
import { Skill } from '../../../models/skill';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FeaturedProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private http = inject(HttpClient);

  skills = toSignal(this.http.get<Skill[]>('/data/skills.json'));
  techLogos = toSignal(this.http.get<techLogo[]>('/data/tech-logos.json'));
  experiences = toSignal(this.http.get<experience[]>('/data/experiences.json'));
}
