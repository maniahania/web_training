import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FooterDataService } from '../shared/services/footer-data.service';
import { FooterLink } from '../shared/models/footer-link.model';
import { EmptyStateComponent } from '../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-footer',
  imports: [EmptyStateComponent],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [FooterDataService],
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
