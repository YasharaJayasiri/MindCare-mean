import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   // ✅ REQUIRED for *ngIf
    RouterOutlet,
    Navbar
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  currentUrl = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  showNavbar(): boolean {
    return !['/login', '/signup'].includes(this.currentUrl);
  }
}
