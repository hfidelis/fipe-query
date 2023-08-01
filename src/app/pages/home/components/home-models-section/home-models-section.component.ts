import { Component } from '@angular/core';
import { faMotorcycle, faCarSide, faTruck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-models-section',
  templateUrl: './home-models-section.component.html',
  styleUrls: ['./home-models-section.component.css']
})
export class HomeModelsSectionComponent {

  carTitle: string = 'Carros';
  bikeTitle: string = 'Motos';
  truckTitle: string = 'Caminhões';

  faMotorcycle: IconDefinition = faMotorcycle;
  faCarSide: IconDefinition = faCarSide;
  faTruck: IconDefinition = faTruck;

  bikeModelSource: string = '../../../../../assets/images/models_motorbike.jpg';
  carModelSource: string = '../../../../../assets/images/models_car.jpg';
  truckModelSource: string = '../../../../../assets/images/models_truck.jpg';

  models: Array<{title: string, icon: IconDefinition, img: string}> = [
    {title: this.carTitle, icon: faCarSide, img: this.carModelSource},
    {title: this.bikeTitle, icon: faMotorcycle, img: this.bikeModelSource},
    {title: this.truckTitle, icon: faTruck, img: this.truckModelSource}
  ]

}
