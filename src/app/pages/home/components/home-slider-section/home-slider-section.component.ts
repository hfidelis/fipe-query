import { Component, OnInit } from '@angular/core';
import { IconDefinition, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-slider-section',
  templateUrl: './home-slider-section.component.html',
  styleUrls: ['./home-slider-section.component.css']
})
export class HomeSliderSectionComponent implements OnInit {
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;
  images: Array<string> = [
    '../../../assets/images/slider_1.jpg',
    '../../../assets/images/slider_2.jpg',
    '../../../assets/images/slider_3.jpg'
  ]
  slideSource: string = this.images[0]

  constructor() {}

  ngOnInit(): void {
    this.slider()
  }

  slider() {
    let i: number = 0

    setInterval(() => {
      if (i < this.images.length - 1) {
        i++
      } else {
        i = 0
      }
      this.slideSource = this.images[i]
    }, 7500)

  }
}
