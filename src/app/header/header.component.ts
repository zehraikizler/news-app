import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public navItems: any = [
    { text: 'HOME', path: '' },
    { text: 'BUSINESS', path: 'business' },
    { text: 'ENTERTAINMENT', path: 'entertainment' },
    { text: 'GENERAL', path: 'general' },
    { text: 'HEALTH', path: 'health' },
    { text: 'SCIENCE', path: 'science' },
    { text: 'SPORTS', path: 'sports' },
    { text: 'TECHNOLOGY', path: 'technology' },
    { text: 'ABOUT', path: 'about' },
  ];

  public isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    console.log(this.isMenuOpen);
  }
}
