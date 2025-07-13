import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SmallSectionComponent } from './small-section/small-section.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    SmallSectionComponent,
    SidePanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected title = 'first-project';
}
