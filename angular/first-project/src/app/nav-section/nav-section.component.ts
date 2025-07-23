import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavDataService } from '../shared/services/nav-data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav-section',
  imports: [],
  standalone: true,
  templateUrl: './nav-section.component.html',
  styleUrl: './nav-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSectionComponent {
  private readonly navDataService = inject(NavDataService);
  readonly navItems = toSignal(this.navDataService.getNavItems(), {
    initialValue: [],
  });
}
