import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'MacBook Pro 16"',
      description: 'Powerful laptop for professionals',
      price: 2499.99,
      imageUrl: 'assets/products/macbook-pro-16.png',
      category: 'Laptops'
    },
    {
      id: 2,
      name: 'Dell XPS 15',
      description: 'Compact and powerful Windows laptop',
      price: 1899.99,
      imageUrl: 'assets/products/dell-xps-15.png',
      category: 'Laptops'
    },
    {
      id: 3,
      name: 'HP Spectre x360',
      description: 'Convertible touchscreen laptop',
      price: 1599.99,
      imageUrl: 'assets/products/hp-spectre-x360.png',
      category: 'Laptops'
    },
    {
      id: 4,
      name: 'Wireless Headphones A',
      description: 'Stylish over-ear wireless headphone',
      price: 299.99,
      imageUrl: 'assets/products/wireless-headphones-a.png',
      category: 'Electronics'
    },
    {
      id: 5,
      name: 'Beats Solo3',
      description: 'On-ear wireless headphones',
      price: 199.99,
      imageUrl: 'assets/products/beats-solo3.png',
      category: 'Electronics'
    },
    {
      id: 6,
      name: 'Sony WH-1000XM5',
      description: 'Flagship noise-canceling headphones',
      price: 399.99,
      imageUrl: 'assets/products/sony-wh-1000xm5.png',
      category: 'Electronics'
    },
    {
      id: 7,
      name: '1MORE SonoFlow Pro',
      description: 'Hi-Res wireless ANC headphones',
      price: 249.99,
      imageUrl: 'assets/products/1more-sonoflow-pro.png',
      category: 'Electronics'
    },
    {
      id: 8,
      name: 'Zildjian ALCHEM-E',
      description: 'Music-headphone hybrid',
      price: 349.99,
      imageUrl: 'assets/products/zildjian-alchem-e.png',
      category: 'Electronics'
    },
    {
      id: 9,
      name: 'Avantree Opera Plus',
      description: 'TV-friendly wireless headphones',
      price: 159.99,
      imageUrl: 'assets/products/avantree-opera-plus.png',
      category: 'Electronics'
    },
    {
      id: 10,
      name: 'Smartphone XYZ',
      description: 'Latest smartphone with advanced features',
      price: 999.99,
      imageUrl: 'assets/products/smartphone-xyz.png',
      category: 'Electronics'
    },
    {
      id: 11,
      name: 'Tablet Ultra',
      description: 'Premium tablet for creators',
      price: 799.99,
      imageUrl: 'assets/products/tablet-ultra.png',
      category: 'Electronics'
    },
    {
      id: 12,
      name: 'Smartwatch 4 Pro',
      description: 'Advanced smartwatch with health tracking',
      price: 399.99,
      imageUrl: 'assets/products/smartwatch-4-pro.png',
      category: 'Wearables'
    },
    {
      id: 13,
      name: 'Action Camera X',
      description: 'Waterproof action camera for adventures',
      price: 299.99,
      imageUrl: 'assets/products/action-camera-x.png',
      category: 'Cameras'
    },
    {
      id: 14,
      name: 'Gaming Mouse V2',
      description: 'High-precision ergonomic mouse',
      price: 79.99,
      imageUrl: 'assets/products/gaming-mouse-v2.png',
      category: 'Accessories'
    },
    {
      id: 15,
      name: 'Bluetooth Speaker Mini',
      description: 'Portable speaker with rich sound',
      price: 49.99,
      imageUrl: 'assets/products/bluetooth-speaker-mini.png',
      category: 'Audio'
    }
  ];


  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
