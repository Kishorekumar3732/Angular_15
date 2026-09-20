import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  email: string = '';

  subscribe(): void {

    const email = this.email.trim();

    if (!email) {
      return;
    }

    console.log('Newsletter subscription:', email);

    this.email = '';
  }

}