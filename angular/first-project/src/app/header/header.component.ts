import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);

  readonly languages = toSignal(this.languageService.getLanguages(), {
    initialValue: [],
  });
}
