import { Component } from '@angular/core';
import { faWhatsapp,faInstagram, faFacebook, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot, faSquareShareNodes, faLandmark } from '@fortawesome/free-solid-svg-icons';

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
