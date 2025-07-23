import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavItem } from '../models/nav-item.model';

@Injectable({ providedIn: 'root' })
export class NavDataService {
  private readonly http = inject(HttpClient);

  getNavItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>('/assets/mocks/nav-items.json');
  }
}
