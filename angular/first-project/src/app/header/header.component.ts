import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LanguageService } from '../shared/services/language.service';
import { EmptyStateComponent } from '../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-header',
  imports: [EmptyStateComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);

  readonly languages = toSignal(this.languageService.getLanguages(), {
    initialValue: [],
  });
}
