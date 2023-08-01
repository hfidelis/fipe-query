import { Component } from '@angular/core';
import { faLink, faCircleInfo, faTable, faHandshakeSimple, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faLink: IconDefinition = faLink;
  faTable: IconDefinition = faTable;
  faHandshakeSimple: IconDefinition = faHandshakeSimple;
  faCircleInfo: IconDefinition = faCircleInfo;
}
