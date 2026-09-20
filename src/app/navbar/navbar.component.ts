import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchText: string = '';
  cartCount: number = 2;
  wishlistCount: number = 3;

  isMobileMenuOpen: boolean = false;
  isCategoryOpen: boolean = false;
  isAccountOpen: boolean = false;

  categories: string[] = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Beauty',
    'Sports',
    'Books'
  ];

  searchProducts(): void {
    if (this.searchText.trim()) {
      console.log('Searching for:', this.searchText);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleCategories(): void {
    this.isCategoryOpen = !this.isCategoryOpen;
    this.isAccountOpen = false;
  }

  toggleAccount(): void {
    this.isAccountOpen = !this.isAccountOpen;
    this.isCategoryOpen = false;
  }

  selectCategory(category: string): void {
    console.log('Selected category:', category);
    this.isCategoryOpen = false;
  }

  closeMenus(): void {
    this.isMobileMenuOpen = false;
    this.isCategoryOpen = false;
    this.isAccountOpen = false;
  }

}