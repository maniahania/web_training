import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-small-section',
  imports: [],
  standalone: true,
  templateUrl: './small-section.component.html',
  styleUrl: './small-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallSectionComponent {}
