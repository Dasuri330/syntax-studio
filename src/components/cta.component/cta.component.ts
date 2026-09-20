import { Component, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cta',
  imports: [FormsModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
})
export class CtaComponent {
  @Input() sectionNumber = '05';
  @Input() title = 'HAVE A PROJECT';
  @Input() highlight = 'IN MIND?';
  @Input() description =
    "I'm always open to discussing software projects, opportunities, and ideas.";
  @Input() buttonText = "LET'S TALK";
  @Input() buttonLink = '/contact';

  isModalOpen = signal(false);

  firstName = '';
  lastName = '';
  email = '';
  message = '';

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSubmit() {
    // TODO: change it to actual API call/email service once available
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message,
    });

    this.closeModal();
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message = '';
  }
}
