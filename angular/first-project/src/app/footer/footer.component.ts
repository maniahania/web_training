import { ChangeDetectionStrategy, Component } from '@angular/core';
import { footerLinks, footerPhones } from '../../mock-data/footer-data';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly phones = footerPhones;
  readonly links = footerLinks;
}
