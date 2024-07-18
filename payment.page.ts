import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {
  totalPrice: number;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.totalPrice = navigation?.extras?.state?.['totalPrice'] || 0;
  }

  pay(): void {
    console.log('Payment processed for $', this.totalPrice);
    // Implement payment logic here
  }
}
