import { ChangeDetectionStrategy, Component } from '@angular/core';
import { navItems } from '../../mock-data/nav-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-small-section',
  imports: [NgFor],
  standalone: true,
  templateUrl: './small-section.component.html',
  styleUrl: './small-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallSectionComponent {
  navItems = navItems;
}
