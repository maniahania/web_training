import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../product.model';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  readonly product = input.required<Product>();
}
