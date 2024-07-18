import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {}  // Inject the Router

  login(): void {
    if (this.username == "abc" && this.password == "abc123") {
      this.router.navigate(['/dashboard']);  // Navigate to the dashboard page
    } else {
      console.log('Login failed');  // Handle login failure (you can show a message to the user)
    }
  }
}
