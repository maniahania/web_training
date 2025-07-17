import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { ProductComponent } from './product/product.component';
import { Product } from './product.model';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  private allProducts: Product[] = [];

  minPrice = input<number>(0);
  maxPrice = input<number>(Infinity);

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
  }

  get filteredProducts(): Product[] {
    return this.allProducts.filter(
      (p) => p.price >= this.minPrice() && p.price <= this.maxPrice()
    );
  }
}
