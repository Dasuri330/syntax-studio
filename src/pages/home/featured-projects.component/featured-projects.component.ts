import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { featuredProject } from '../../../models/featuredproject';

@Component({
  selector: 'app-featured-projects',
  imports: [RouterLink],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css',
})
export class FeaturedProjectsComponent {
  private http = inject(HttpClient);

  projects = toSignal(this.http.get<featuredProject[]>('/data/featured-project.json'));

  selectedIndices = new Set<number>();
  skeletonItems = [0, 1, 2];

  toggleProject(index: number): void {
    if (this.selectedIndices.has(index)) {
      this.selectedIndices.delete(index);
    } else {
      this.selectedIndices.add(index);
    }
  }
}
