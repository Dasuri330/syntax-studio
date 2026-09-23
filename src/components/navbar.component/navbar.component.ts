import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ContactModalService } from '../../services/contact-modal.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private contactModal = inject(ContactModalService);
  private routerSub: Subscription | null = null;

  activeSection = signal('home');
  menuOpen = signal(false);
  private observer: IntersectionObserver | null = null;
  private pendingSectionId: string | null = null;
  private pendingSectionTimer: ReturnType<typeof setTimeout> | null = null;

  private readonly sectionToTab: Record<string, string> = {
    home: 'home',
    projects: 'projects',
    about: 'about',
    skills: 'about',
    experience: 'about',
    contact: 'contact',
  };

  ngOnInit() {
    this.syncFromRoute(this.router.url);

    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.syncFromRoute(event.urlAfterRedirects));
  }

  private syncFromRoute(url: string) {
    if (this.isHomeRoute(url)) {
      const fragment = this.getFragment(url);
      if (fragment && this.sectionToTab[fragment]) {
        this.activeSection.set(this.sectionToTab[fragment]);
        this.pendingSectionId = fragment;
        this.schedulePendingSectionReset();
      }

      if (!this.observer) {
        this.setupScrollSpy();
      }
      return;
    }

    this.observer?.disconnect();
    this.observer = null;

    if (url.startsWith('/about')) {
      this.activeSection.set('about');
    } else if (url.startsWith('/projects')) {
      this.activeSection.set('projects');
    } else if (url.startsWith('/contact')) {
      this.activeSection.set('contact');
    } else {
      this.activeSection.set('home');
    }
  }

  private isHomeRoute(url: string): boolean {
    return url === '/' || url.startsWith('/#') || url.startsWith('/?');
  }

  private getFragment(url: string): string | null {
    const fragment = url.split('#')[1]?.split('?')[0];
    return fragment ? decodeURIComponent(fragment) : null;
  }

  setupScrollSpy() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    this.observer = new IntersectionObserver(() => {
      this.recomputeActiveSection();
    }, options);

    setTimeout(() => {
      Object.keys(this.sectionToTab).forEach((id) => {
        const element = document.getElementById(id);
        if (element) this.observer?.observe(element);
      });
      this.recomputeActiveSection();
    }, 100);
  }

  private recomputeActiveSection() {
    if (this.pendingSectionId) {
      const target = document.getElementById(this.pendingSectionId);

      if (!target) return;

      // Keep the clicked tab active while the smooth scroll is in progress.
      // The target should finish approximately 80px below the viewport top.
      const targetReached = Math.abs(target.getBoundingClientRect().top - 80) <= 120;
      if (!targetReached) return;

      this.pendingSectionId = null;
    }

    const mid = window.innerHeight / 2;

    for (const id of Object.keys(this.sectionToTab)) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      if (rect.top <= mid && rect.bottom >= mid) {
        this.activeSection.set(this.sectionToTab[id]);
        return;
      }
    }
  }

  scrollToSection(sectionId: string) {
    this.menuOpen.set(false);
    this.activeSection.set(this.sectionToTab[sectionId] ?? sectionId);
    this.pendingSectionId = sectionId;

    this.schedulePendingSectionReset();

    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      return;
    }

    // The section is not part of the current routed page. Return to the home
    // page and let Angular's anchor scrolling find it after navigation.
    this.router.navigate(['/'], { fragment: sectionId });
  }

  toggleMenu() {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  openContactModal() {
    this.closeMenu();
    this.contactModal.open();
  }

  private schedulePendingSectionReset() {
    if (this.pendingSectionTimer) {
      clearTimeout(this.pendingSectionTimer);
    }

    // Prevent a pending navigation from blocking the scroll spy indefinitely
    // if the user interrupts the smooth scroll.
    this.pendingSectionTimer = setTimeout(() => {
      this.pendingSectionId = null;
      this.recomputeActiveSection();
    }, 2000);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.pendingSectionTimer) {
      clearTimeout(this.pendingSectionTimer);
    }
    this.routerSub?.unsubscribe();
  }
}
