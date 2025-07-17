import { Injectable } from '@angular/core';
import { Product } from '../product-list/product.model';
import { products } from '../../../mock-data/products-data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = products;

  getProducts(): Product[] {
    return this.products;
  }
}
