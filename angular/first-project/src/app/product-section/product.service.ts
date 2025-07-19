import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { products } from '../../mock-data/products-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(products);
  }
}
