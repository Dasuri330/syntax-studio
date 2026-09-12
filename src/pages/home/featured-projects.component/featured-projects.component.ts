import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  imports: [RouterLink],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css',
})
export class FeaturedProjectsComponent {
  selectedIndices = new Set<number>();

  projects = [
    {
      number: '01',
      category: 'ENTERPRISE / HEALTHCARE',
      title: 'CGH Digitalization',
      description: `Healthcare digitalization features supporting patient care workflows and clinical operations, an AngularJS-based EMR (Electronic Medical Record) system, where I contribute to the Patient Care Plan module — including a draft-preservation system for shift logs and fluid intake/output automapping. I've led cross-browser compatibility efforts, resolving Firefox-specific issues across roughly ten EMR modules, and contributed to pagination systems, concurrency/stale-detection polling to prevent conflicting edits, role-based permission controls, and responsive layout work for tablet breakpoints. My stack includes AngularJS, RequireJS, SCSS (BEM), Bootstrap, and Docker.`,
      technologies: [
        'AngularJS',
        'JavaScript',
        'SCSS',
        'Docker',
        'Bootstrap',
        'RequireJS',
        'Python',
      ],
    },

    {
      number: '02',
      category: 'FRONTEND / PERMIT APPLICATION',
      title: 'MACEA Permit Processing System',
      description: `A permit application platform built with Angular, TypeScript, PrimeNG, and ngx-permissions. I built data tables with frozen columns and role-based visibility, implemented audit logging, integrated REST APIs for permit retrieval, cancellation, and document downloads with server-side pagination, and developed responsive layouts for desktop and mobile.`,
      technologies: ['Angular', 'TypeScript', 'PrimeNG', 'ngx-permissions', 'Bootstrap'],
    },

    {
      number: '03',
      category: 'FULL STACK / CAPSTONE',
      title: 'AquaLuminus',
      description: `A mobile UV water filtration monitoring system designed to provide real-time water quality and system insights. The platform enables users to monitor filtration performance, track water-related data, and view system status through an intuitive and centralized dashboard, helping improve the visibility and management of water purification operations.`,
      technologies: ['React', 'Tailwind', 'PHP', 'MySQL', 'Arduino'],
    },
  ];

  toggleProject(index: number): void {
    if (this.selectedIndices.has(index)) {
      this.selectedIndices.delete(index);
    } else {
      this.selectedIndices.add(index);
    }
  }
}
