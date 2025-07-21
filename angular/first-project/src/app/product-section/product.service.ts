import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { products } from '../../mock-data/products-data';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(products).pipe(
      map((allProducts) => allProducts.find((product) => product.id === id))
    );
  }
}
