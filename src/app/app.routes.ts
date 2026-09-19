import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/home/home.component/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'featured-projects',
    loadComponent: () =>
      import('../pages/home/featured-projects.component/featured-projects.component').then(
        (m) => m.FeaturedProjectsComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../pages/about/about.component/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('../pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('../pages/case-study/case-study.component/case-study.component').then(
        (m) => m.CaseStudyComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
