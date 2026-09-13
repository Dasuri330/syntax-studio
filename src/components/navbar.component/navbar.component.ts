import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  activeSection: string = 'home';
  private observer: IntersectionObserver | null = null;

  ngOnInit() {
    this.setupScrollSpy();
  }

  setupScrollSpy() {
    const options = {
      root: null,
      // Creates a 1px trigger line across the exact vertical center of the screen.
      // Whichever section touches this middle line becomes the active link.
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    // Sections that don't have their own nav tab (skills, experience) are
    // treated as part of the nearest tab's zone — keeps ABOUT highlighted
    // continuously through them instead of leaving a "dead zone".
    const sectionToTab: Record<string, string> = {
      home: 'home',
      projects: 'projects',
      about: 'about',
      skills: 'about',
      experience: 'about',
      contact: 'contact',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = sectionToTab[entry.target.id] ?? entry.target.id;
        }
      });
    }, options);

    setTimeout(() => {
      Object.keys(sectionToTab).forEach((id) => {
        const element = document.getElementById(id);
        if (element) this.observer?.observe(element);
      });
    }, 100);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset by 80px to account for your fixed sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
