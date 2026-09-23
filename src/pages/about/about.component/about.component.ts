import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavbarComponent } from '../../../components/navbar.component/navbar.component';
import { CtaComponent } from '../../../components/cta.component/cta.component';
import { AboutData } from '../../../models/about';

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
