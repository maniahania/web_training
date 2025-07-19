import { ChangeDetectionStrategy, Component } from '@angular/core';
import { navItems } from '../../mock-data/nav-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-section',
  imports: [NgFor],
  standalone: true,
  templateUrl: './nav-section.component.html',
  styleUrl: './nav-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavSectionComponent {
  readonly navItems = navItems;
}
