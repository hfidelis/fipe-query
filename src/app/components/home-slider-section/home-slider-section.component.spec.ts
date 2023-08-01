import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderSectionComponent } from './home-slider-section.component';

describe('HomeSliderSectionComponent', () => {
  let component: HomeSliderSectionComponent;
  let fixture: ComponentFixture<HomeSliderSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSliderSectionComponent]
    });
    fixture = TestBed.createComponent(HomeSliderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
