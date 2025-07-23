import { Routes } from '@angular/router';
import { ProductSectionComponent } from './product-section/product-section.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductSectionComponent },
  {
    path: 'products/:productId',
    loadComponent: () =>
      import(
        './product-section/components/product-details/product-details.component'
      ).then((mod) => mod.ProductDetailsComponent),
  },
  { path: '**', component: NotFoundComponent },
];
