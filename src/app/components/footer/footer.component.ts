import { Component } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faLandmark, faMapLocationDot, faSquareShareNodes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faWhatsapp: IconDefinition = faWhatsapp;
  faInstagram: IconDefinition = faInstagram;
  faFacebook: IconDefinition = faFacebook;
  faMapLocationDot: IconDefinition = faMapLocationDot;
  faSquareShareNodes: IconDefinition = faSquareShareNodes;
  faLandmark: IconDefinition = faLandmark;
}
