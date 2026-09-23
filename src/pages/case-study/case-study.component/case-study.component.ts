import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CtaComponent } from '../../../components/cta.component/cta.component';
import { NavbarComponent } from '../../../components/navbar.component/navbar.component';
import { featuredProject } from '../../../models/featuredproject';

interface KeyFeature {
  title: string;
  description: string;
  icon: string;
}

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface TechStackItem {
  name: string;
  category: string;
}

interface CaseStudyData {
  slug: string;

  overview: {
    description: string;

    details: {
      client: string;
      timeline: string;
      role: string;
      company: string;
      type: string;
    };
  };

  keyFeatures: KeyFeature[];

  gallery: GalleryItem[];

  techStack: TechStackItem[];

  cta: {
    title: string;
    description: string;
  };
}

@Component({
  selector: 'app-case-study',
  imports: [RouterLink, NavbarComponent, CtaComponent],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css',
})
export class CaseStudyComponent implements OnInit {
  project = signal<featuredProject | null>(null);

  caseStudy = signal<CaseStudyData | null>(null);

  loading = signal(true);

  notFound = signal(false);

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      // Reset scroll to top every time the slug changes, since Angular
      // reuses this component instance for /projects/:slug -> /projects/:slug
      // navigations and doesn't reset scroll position on its own.
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });

      this.loading.set(true);
      this.notFound.set(false);
      this.caseStudy.set(null);

      if (!slug) {
        this.notFound.set(true);
        this.loading.set(false);
        return;
      }

      this.http.get<featuredProject[]>('/data/projects.json').subscribe({
        next: (projects) => {
          const foundProject = projects.find((project) => project.slug === slug);

          if (!foundProject) {
            this.notFound.set(true);
            this.loading.set(false);
            return;
          }

          this.project.set(foundProject);

          this.loadCaseStudy(slug);
        },

        error: () => {
          this.notFound.set(true);
          this.loading.set(false);
        },
      });
    });
  }

  private loadCaseStudy(slug: string): void {
    this.http.get<CaseStudyData>(`/data/${slug}.json`).subscribe({
      next: (data) => {
        this.caseStudy.set(data);

        this.loading.set(false);
      },

      error: () => {
        this.notFound.set(true);

        this.loading.set(false);
      },
    });
  }
}
