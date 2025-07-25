import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);

  readonly minPrice = input<number>(0);
  readonly maxPrice = input<number>(Infinity);
  readonly allProducts = toSignal(this.productService.getProducts(), {
    initialValue: [],
  });

  readonly filteredProducts = computed(() =>
    this.allProducts().filter(
      (p) => p.price >= this.minPrice() && p.price <= this.maxPrice()
    )
  );
}
