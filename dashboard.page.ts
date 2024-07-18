import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  count: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  foodItems: FoodItem[] = [
    { id: 1, name: 'Pizza', price: 80, image: 'assets/pizza1.jpg', count: 0 },
    { id: 2, name: 'Pizza', price: 80, image: 'assets/pizza.jpeg', count: 0 },
    { id: 3, name: 'Pizza', price: 80, image: 'assets/pizza3.jpg', count: 0 },
    { id: 4, name: 'Burger', price: 50, image: 'assets/burger.jpeg', count: 0 },

    { id: 5, name: 'french', price: 70, image: 'assets/french.jpg', count: 0 },
    { id: 6, name: 'spring', price: 70, image: 'assets/spring.jpg', count: 0 },
    { id: 7, name: 'momos', price: 80, image: 'assets/momos.jpg', count: 0 },
    { id: 8, name: 'dokhala', price: 90, image: 'assets/dokhala.jpg', count: 0 },
    { id: 9, name: 'dokhala', price: 90, image: 'assets/dokhala.jpg', count: 0 },
    { id: 10, name: 'khandvi', price: 120, image: 'assets/khandvi.jpg', count: 0 },
    { id: 11, name: 'jalebi', price: 150, image: 'assets/jalebi.jpg', count: 0 },
    { id: 12, name: 'vada pav', price: 170, image: 'assets/vada pav.jpg', count: 0 },
    { id: 13, name: 'Pasta', price: 200, image: 'assets/pasta.jpeg', count: 0 },

    { id: 14, name: 'Pasta', price: 110, image: 'assets/pasta.jpeg', count: 0 }
  ];

  deliveryOptions: string[] = ['Standard Delivery', 'Express Delivery', 'Pickup'];
  selectedDeliveryOption: string = 'Standard Delivery';
  discountCode: string = '';
  discountApplied: boolean = false;

  constructor(private router: Router) {}

  increaseCount(item: FoodItem): void {
    item.count++;
  }

  decreaseCount(item: FoodItem): void {
    if (item.count > 0) {
      item.count--;
    }
  }

  getTotalPrice(): number {
    let total = this.foodItems.reduce((acc, item) => acc + item.price * item.count, 0);
    if (this.discountApplied) {
      total *= 0.9; // Apply a 10% discount
    }
    return total;
  }

  applyDiscount(): void {
    if (this.discountCode === 'SAVE10') {
      this.discountApplied = true;
      alert('Discount applied!');
    } else {
      alert('Invalid discount code');
    }
  }

  proceedToPayment(): void {
    this.router.navigate(['/payment'], { state: { totalPrice: this.getTotalPrice() } });
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
  navigateTodelivery(): void {
    this.router.navigate(['/delivery']);
  }
}



