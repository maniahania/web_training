import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/mocks/products.json');
  }

  getProductById(id: string): Observable<Product | undefined> {
    return this.httpClient
      .get<Product[]>('assets/mocks/products.json')
      .pipe(
        map((allProducts) => allProducts.find((product) => product.id === id))
      );
  }
}
