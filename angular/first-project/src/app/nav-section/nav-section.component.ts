import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavDataService } from '../shared/services/nav-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { EmptyStateComponent } from '../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-nav-section',
  imports: [EmptyStateComponent],
  standalone: true,
  templateUrl: './nav-section.component.html',
  styleUrl: './nav-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSectionComponent {
  private readonly navDataService = inject(NavDataService);
  readonly navItems = toSignal(this.navDataService.getNavItems(), {
    initialValue: [],
  });
}
