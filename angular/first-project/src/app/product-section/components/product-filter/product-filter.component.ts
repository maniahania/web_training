import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { ProductFilterPlaceholders } from '../../enums/product-filter.placeholders.enum';

@Component({
  selector: 'app-product-filter',
  imports: [],
  standalone: true,
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFilterComponent {
  readonly minPriceChange = output<number>();
  readonly maxPriceChange = output<number>();
  readonly placeholders = ProductFilterPlaceholders;

  onMinChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input) {
      this.minPriceChange.emit(Number(input.value));
    }
  }

  onMaxChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input) {
      this.maxPriceChange.emit(Number(input.value));
    }
  }
}
