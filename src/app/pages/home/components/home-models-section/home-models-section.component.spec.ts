import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModelsSectionComponent } from './home-models-section.component';

describe('HomeModelsSectionComponent', () => {
  let component: HomeModelsSectionComponent;
  let fixture: ComponentFixture<HomeModelsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeModelsSectionComponent]
    });
    fixture = TestBed.createComponent(HomeModelsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
