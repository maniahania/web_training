import { ChangeDetectionStrategy, Component } from '@angular/core';
import { languages } from '../../mock-data/languages-data';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly languages = languages;
}
