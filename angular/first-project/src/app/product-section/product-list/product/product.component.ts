import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  product = input.required<Product>();
}
