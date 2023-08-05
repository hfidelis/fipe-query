import { Component } from '@angular/core';
import { IconDefinition, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-spinner',
  templateUrl: './form-spinner.component.html',
  styleUrls: ['./form-spinner.component.css']
})
export class FormSpinnerComponent {
  faGear: IconDefinition = faGear;
}
