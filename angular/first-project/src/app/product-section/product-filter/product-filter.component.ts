import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [],
  standalone: true,
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFilterComponent {
  minPriceChange = output<number>();
  maxPriceChange = output<number>();

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
