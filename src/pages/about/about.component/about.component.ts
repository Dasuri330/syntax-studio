import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavbarComponent } from '../../../components/navbar.component/navbar.component';
import { CtaComponent } from '../../../components/cta.component/cta.component';

interface AboutData {
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    description: string;
    tags: string[];
  };

  introduction: {
    title: string;
    paragraphs: string[];
  };

  profile: {
    basedIn: string;
    focus: string;
    stack: string[];
    interests: string[];
  };

  journey: {
    number: string;
    icon: string;
    title: string;
    description: string;
    year: string;
  }[];

  capabilities: {
    icon: string;
    title: string;
    description: string;
  }[];

  toolbox: {
    icon: string;
    category: string;
    technologies: string[];
  }[];

  principles: {
    title: string;
    description: string;
    icon: string;
  }[];

  exploring: {
    icon: string;
    title: string;
    description: string;
  }[];

  stats: {
    icon: string;
    value: string;
    label: string;
  }[];

  cta: {
    eyebrow: string;
    title: string;
    highlight: string;
    button: string;
  };
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, NavbarComponent, CtaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private http = inject(HttpClient);

  about = toSignal(this.http.get<AboutData>('/data/about.json'));
}
