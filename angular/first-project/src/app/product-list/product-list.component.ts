import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { Product } from './product.model';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent, ProductFilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  private allProducts: Product[] = [
    { id: '1', name: 'bag', price: 12.0 },
    { id: '2', name: 'tshirt', price: 25.0 },
    { id: '3', name: 'jeans', price: 30.0 },
    { id: '4', name: 'jacket', price: 41.99 },
  ];

  minPrice = 0;
  maxPrice = Infinity;

  get filteredProducts(): Product[] {
    return this.allProducts.filter(
      (p) => p.price >= this.minPrice && p.price <= this.maxPrice
    );
  }

  onMinPriceChange(value: number) {
    this.minPrice = value;
  }

  onMaxPriceChange(value: number) {
    this.maxPrice = value;
  }
}
