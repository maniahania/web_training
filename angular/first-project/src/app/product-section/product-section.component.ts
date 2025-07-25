import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-product-section',
  imports: [ProductListComponent, ProductFilterComponent, CardComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSectionComponent {
  readonly minPrice = signal(0);
  readonly maxPrice = signal(Infinity);

  onMinPriceChange(value: number) {
    this.minPrice.set(value);
  }

  onMaxPriceChange(value: number) {
    this.maxPrice.set(value);
  }
}
