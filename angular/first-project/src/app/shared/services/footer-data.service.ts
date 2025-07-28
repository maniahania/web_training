import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterData } from '../models/footer-data.model';

@Injectable()
export class FooterDataService {
  private readonly httpClient = inject(HttpClient);

  getFooterData(): Observable<FooterData> {
    return this.httpClient.get<FooterData>('/assets/mocks/footer-info.json');
  }
}
