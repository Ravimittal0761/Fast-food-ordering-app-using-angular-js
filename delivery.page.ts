import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage {
  address: string = '';
  pinCode: string='';
  selectedCountry: string='';
  selectedState: string='';
  selectedBenefit: string='';
  offerAccepted: boolean = false;

  benefits: string[] = ['Free Delivery', 'Discount on Next Order', 'Gift Voucher'];
  countries: string[] = ['Country A', 'Country B', 'Country C'];
  states: string[] = ['State X', 'State Y', 'State Z'];

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async saveDeliveryDetails() {
    if (!this.address || !this.pinCode || !this.selectedCountry || !this.selectedState || !this.selectedBenefit) {
      this.presentAlert('Error', 'Please fill in all details.');
      return;
    }

    // Simulate saving data to a server or database
    // Replace with your actual save logic
    // For demonstration, simulate a delay
    await this.simulateSave();

    // Show success message
    this.presentAlert('Success', 'Delivery details saved successfully.');

    // Navigate to another page (e.g., Order confirmation page)
    // Replace '/order-confirmation' with your actual path
    this.router.navigate(['/order-confirmation']);
  }

  async simulateSave() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, 2000); // Simulate a 2-second delay
    });
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
