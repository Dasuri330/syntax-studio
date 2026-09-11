import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar.component/navbar.component';
import { FeaturedProjectsComponent } from '../featured-projects.component/featured-projects.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FeaturedProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'SCSS',
    'Bootstrap',
    'Python',
    'FastAPI',
    'SQL',
    'Git',
  ];

  experiences = [
    {
      year: '2025 — 2026',
      role: 'Software Developer Trainee',
      company: 'Exist Software Labs',
      description:
        'Worked on enterprise web applications using Angular and contributed to healthcare and business process digitalization projects.',
    },
    {
      year: '2025 — 2026',
      role: 'Front-End Developer Intern',
      company: 'Exist Software Labs',
      description:
        'Developed user interfaces, implemented application features, fixed bugs, and collaborated with developers and project teams.',
    },
  ];
}
