import { Component } from '@angular/core';

interface Category {
  name: string;
  icon: string;
  description: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories: Category[] = [
    {
      name: 'Electronics',
      icon: '💻',
      description: 'Laptops, phones & gadgets'
    },
    {
      name: 'Fashion',
      icon: '👕',
      description: 'Trendy clothes & accessories'
    },
    {
      name: 'Home',
      icon: '🏠',
      description: 'Everything for your home'
    },
    {
      name: 'Beauty',
      icon: '💄',
      description: 'Beauty & personal care'
    },
    {
      name: 'Sports',
      icon: '⚽',
      description: 'Sports & fitness products'
    },
    {
      name: 'Books',
      icon: '📚',
      description: 'Books & learning'
    }
  ];

  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 2499,
      oldPrice: 3999,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Premium Smart Watch',
      category: 'Electronics',
      price: 3499,
      oldPrice: 5999,
      rating: 4.7,
      reviews: 214,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'Classic Sneakers',
      category: 'Fashion',
      price: 1999,
      oldPrice: 2999,
      rating: 4.4,
      reviews: 96,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
      badge: 'Trending'
    },
    {
      id: 4,
      name: 'Minimal Backpack',
      category: 'Fashion',
      price: 1299,
      oldPrice: 1999,
      rating: 4.6,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
      badge: 'New'
    }
  ];

  addToCart(product: Product): void {
    console.log('Added to cart:', product.name);
  }

  shopNow(): void {
    console.log('Shop Now clicked');
  }

  exploreCategories(): void {
    console.log('Explore Categories clicked');
  }

}