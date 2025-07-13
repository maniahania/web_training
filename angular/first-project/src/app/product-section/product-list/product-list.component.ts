import { Component, inject, OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { Product } from './product.model';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent, ProductFilterComponent],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private allProducts: Product[] = [];

  minPrice = 0;
  maxPrice = Infinity;

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
  }

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
