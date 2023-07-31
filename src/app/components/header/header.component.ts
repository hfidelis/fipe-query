import { Component } from '@angular/core';
import { faMagnifyingGlassDollar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoIcon: IconDefinition = faMagnifyingGlassDollar
  title: string = 'FIPE Query'
}
