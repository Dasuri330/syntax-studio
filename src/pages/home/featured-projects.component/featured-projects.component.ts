import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { featuredProject } from '../../../models/featuredproject';
import { ProjectListComponent } from '../../../components/project-list.component/project-list.component';

@Component({
  selector: 'app-featured-projects',
  imports: [RouterLink, ProjectListComponent],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css',
})
export class FeaturedProjectsComponent {
  private http = inject(HttpClient);

  projects = toSignal(this.http.get<featuredProject[]>('/data/featured-project.json'));
}
