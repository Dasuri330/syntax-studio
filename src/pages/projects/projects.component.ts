import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { featuredProject } from '../../models/featuredproject';
import { ProjectListComponent } from '../../components/project-list.component/project-list.component';
import { NavbarComponent } from '../../components/navbar.component/navbar.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectListComponent, NavbarComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private http = inject(HttpClient);

  projects = toSignal(this.http.get<featuredProject[]>('/data/projects.json'));
}
