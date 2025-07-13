import { Component, signal } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@Component({
  selector: 'app-product-section',
  imports: [ProductListComponent, ProductFilterComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css',
})
export class ProductSection {
  minPrice = signal(0);
  maxPrice = signal(Infinity);

  onMinPriceChange(value: number) {
    this.minPrice.set(value);
  }

  onMaxPriceChange(value: number) {
    this.maxPrice.set(value);
  }
}
