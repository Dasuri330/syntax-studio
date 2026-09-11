import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  imports: [RouterLink],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css',
})
export class FeaturedProjectsComponent {
  projects = [
    {
      number: '01',
      category: 'FULL STACK / CAPSTONE',
      title: 'AquaLuminus',
      description:
        'A mobile UV water filtration monitoring system designed to provide real-time water quality and system insights.',
      technologies: ['Angular', 'React', 'Tailwind', 'Python'],
    },
    {
      number: '02',
      category: 'ENTERPRISE / HEALTHCARE',
      title: 'CGH Digitalization',
      description:
        'Healthcare digitalization features supporting patient care workflows and clinical operations.',
      technologies: ['AngularJS', 'JavaScript', 'SCSS', 'Docker'],
    },
  ];
}
