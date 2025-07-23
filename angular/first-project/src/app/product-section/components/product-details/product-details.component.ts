import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { switchMap } from 'rxjs';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NotFoundComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  product = signal<Product | undefined>(undefined);

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) => {
          const productId = paramMap.get('productId') ?? '';
          return this.productService.getProductById(productId);
        })
      )
      .subscribe((product) => {
        this.product.set(product);
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
