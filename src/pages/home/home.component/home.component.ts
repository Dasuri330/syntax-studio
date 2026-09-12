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

  techLogos = [
    {
      name: 'Angular',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },
    {
      name: 'React',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'TypeScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      name: 'SCSS',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    },
    {
      name: 'JavaScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      name: 'HTML',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      name: 'Bootstrap',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'SQL',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
    },
    {
      name: 'Python',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    },
    {
      name: 'Git',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      name: 'Figma',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    },
    {
      name: 'FastAPI',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    },
  ];
  experiences = [
    {
      year: 'March 2026 — September 2026',
      role: 'Software Developer Trainee (CGH Project)',
      company: 'Exist Software Labs',
      description: `Since March 2026, I've been working on CGH Digitalization, an AngularJS-based EMR (Electronic Medical Record) system, where I contribute to the Patient Care Plan module — including a draft-preservation system for shift logs and fluid intake/output automapping — and have led cross-browser compatibility efforts, resolving Firefox-specific issues across roughly ten EMR modules. Other contributions include pagination systems, concurrency/stale-detection polling to prevent conflicting edits, role-based permission controls, and responsive layout work for tablet breakpoints. My stack includes AngularJS, RequireJS, SCSS (BEM), Bootstrap, and Docker.`,
    },
    {
      year: 'December 2025 — March 2026',
      role: 'Software Developer Trainee (MACEA Project)',
      company: 'Exist Software Labs',
      description:
        'Worked on MACEA, a multi-stage permit application and management platform built with Angular, TypeScript, PrimeNG, and ngx-permissions, developing data tables, audit logging, and document download features.',
    },
    {
      year: 'April 2025 — July 2025',
      role: 'Project Manager (PM-JI Reservify Capstone Project)',
      company: 'National University - Fairview',
      description:
        'PM-JI Reservify is a web-based reservation and scheduling management system designed to digitize and streamline the booking process for PM-JI. The system provides users with a convenient way to view availability and submit reservations while giving administrators centralized tools to manage bookings and prevent scheduling conflicts.',
    },
    {
      year: 'August 2025 — October 2025',
      role: 'Project Manager / Frontend Developer (AquaLuminus Capstone Project)',
      company: 'National University - Fairview',
      description:
        'AquaLuminus is a mobile water filtration monitoring and management system designed to support the monitoring of UV-based water purification processes. The system provides users with a centralized dashboard for viewing filtration-related information, monitoring system status, and managing water purification data.',
    },
  ];
}
