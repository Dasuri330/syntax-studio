import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactModalService } from '../../services/contact-modal.service';

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

  openModal() {
    this.contactModal.open();
  }

  closeModal() {
    this.contactModal.close();
  }

  onSubmit() {
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
