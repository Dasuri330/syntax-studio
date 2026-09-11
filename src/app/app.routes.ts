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
    path: '**',
    redirectTo: '',
  },
];
