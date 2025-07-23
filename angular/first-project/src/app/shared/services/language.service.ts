import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly httpClient = inject(HttpClient);

  getLanguages(): Observable<Language[]> {
    return this.httpClient.get<Language[]>('/assets/mocks/languages.json');
  }
}
