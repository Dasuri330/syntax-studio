import { Component, Input, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactModalService } from '../../services/contact-modal.service';
import { environment } from '../../environments/environment';
import emailjs from '@emailjs/browser';

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

  private contactModal = inject(ContactModalService);

  isModalOpen = this.contactModal.isOpen;

  firstName = '';
  lastName = '';
  email = '';
  message = '';

  isSending = signal(false);
  isSubmitted = signal(false);
  submitError = signal('');

  openModal() {
    this.contactModal.open();
  }

  closeModal() {
    this.contactModal.close();
    this.isSubmitted.set(false);
    this.submitError.set('');
  }

  onSubmit() {
    this.isSending.set(true);
    this.submitError.set('');

    const templateParams = {
      name: `${this.firstName} ${this.lastName}`,
      email: this.email,
      message: this.message,
    };

    emailjs
      .send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey,
      )
      .then(() => {
        this.isSending.set(false);
        this.isSubmitted.set(true);
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
      })
      .catch((error) => {
        this.isSending.set(false);
        this.submitError.set('May problema sa pagpadala. Subukan ulit.');
        console.error('EmailJS error:', error);
      });
  }
}
