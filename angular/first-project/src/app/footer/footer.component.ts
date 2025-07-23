import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FooterDataService } from '../shared/services/footer-data.service';
import { FooterLink } from '../shared/models/footer-link.model';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly footerService = inject(FooterDataService);
  readonly phones = signal<string[]>([]);
  readonly links = signal<FooterLink[]>([]);

  ngOnInit(): void {
    this.footerService.getFooterData().subscribe((data) => {
      this.phones.set(data.phones);
      this.links.set(data.links);
    });
  }
}
