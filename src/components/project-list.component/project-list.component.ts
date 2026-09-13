import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featuredProject } from '../../models/featuredproject';

@Component({
  selector: 'app-project-list',
  imports: [RouterLink],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  // Pass in the list of projects to render. Undefined = still loading (shows skeleton).
  projects = input<featuredProject[] | undefined>(undefined);

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
