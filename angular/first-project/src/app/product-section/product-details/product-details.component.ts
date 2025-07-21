import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly productService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);

  product = signal<Product | undefined>(undefined);

  constructor() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const productId = paramMap.get('productId');
      if (!productId) return;
      this.productService.getProductById(productId).subscribe((product) => {
        this.product.set(product);
      });
    });
  }
}
