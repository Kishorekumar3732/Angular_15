import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  /* ==============================
     SEARCH
  ============================== */

  searchProducts(): void {

    const search = this.searchText.trim();

    if (!search) {
      return;
    }

    this.closeAllMenus();

    this.router.navigate(['/products'], {
      queryParams: {
        search: search
      }
    });
  }

  clearSearch(): void {
    this.searchText = '';
  }


  /* ==============================
     CATEGORIES
  ============================== */

  toggleCategories(event?: Event): void {

    if (event) {
      event.stopPropagation();
    }

    this.isCategoryOpen = !this.isCategoryOpen;
    this.isAccountOpen = false;
  }

  selectCategory(category: string): void {

    this.isCategoryOpen = false;
    this.isMobileMenuOpen = false;

    this.router.navigate(['/products'], {
      queryParams: {
        category: category
      }
    });
  }


  /* ==============================
     ACCOUNT
  ============================== */

  toggleAccount(event?: Event): void {

    if (event) {
      event.stopPropagation();
    }

    this.isAccountOpen = !this.isAccountOpen;
    this.isCategoryOpen = false;
  }


  /* ==============================
     MOBILE MENU
  ============================== */

  toggleMobileMenu(): void {

    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    this.isCategoryOpen = false;
    this.isAccountOpen = false;
  }


  /* ==============================
     NAVIGATION
  ============================== */

  navigateTo(path: string): void {

    this.closeAllMenus();

    this.router.navigate([path]);
  }


  /* ==============================
     CLOSE MENUS
  ============================== */

  closeAllMenus(): void {

    this.isMobileMenuOpen = false;
    this.isCategoryOpen = false;
    this.isAccountOpen = false;
  }


  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }


  /* ==============================
     CLICK OUTSIDE
  ============================== */

  @HostListener('document:click')
  closeDropdowns(): void {

    this.isCategoryOpen = false;
    this.isAccountOpen = false;
  }
}