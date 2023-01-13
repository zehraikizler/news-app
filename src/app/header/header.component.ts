import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  public searchQuery: String = '';

  onInput($event: any): void {
    this.searchQuery = $event.target.value;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { q: $event.target.value ? $event.target.value : null },
      queryParamsHandling: 'merge',
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    console.log(this.isMenuOpen);
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
