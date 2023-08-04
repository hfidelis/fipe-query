import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { faMotorcycle, faCarSide, faTruck, IconDefinition, faCalendarDays, faTags, faCaretDown, faIndustry, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { QueryValue } from '../../models/QueryValue';
import { FipePattern } from '../../models/FipePattern';
import { FipeService } from '../../services/fipe.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {

  @Output() onSubmit: EventEmitter<QueryValue> = new EventEmitter<QueryValue>;

  vehicleForm!: FormGroup;

  brands$?: Observable<Array<FipePattern>> | null;
  models$?: Observable<Array<FipePattern>> | null;
  years$?: Observable<Array<FipePattern>> | null;

  isChecked: number | null = null;

  carValue: string = 'carros';
  motorcycleValue: string = 'motos';
  truckValue: string = 'caminhoes';

  faCarSide: IconDefinition = faCarSide;
  faMotorcycle: IconDefinition = faMotorcycle;
  faTruck: IconDefinition = faTruck;
  faCalendarDays: IconDefinition = faCalendarDays;
  faTags: IconDefinition = faTags;
  faIndustry: IconDefinition = faIndustry;
  faTriangleExclamation: IconDefinition = faTriangleExclamation;
  faCaretDown: IconDefinition = faCaretDown;

  constructor(
    private fipeService: FipeService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.vehicleForm = new FormGroup({
      vehicleType: new FormControl('', [Validators.required]),
      brandCode: new FormControl('', [Validators.required]),
      modelCode: new FormControl('', [Validators.required]),
      yearCode: new FormControl('', [Validators.required])
    });

    this.vehicleForm.get('vehicleType')?.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          this.brands$ = this.getBrands(value);
        };
        this.vehicleForm.get('brandCode')?.reset();
        this.vehicleForm.get('modelCode')?.reset();
        this.vehicleForm.get('yearCode')?.reset();
        this.models$ = null;
        this.years$ = null;
      }
    });

    this.vehicleForm.get('brandCode')?.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          this.models$ = this.getModels(this.vehicleType.value, value);
        };
        this.vehicleForm.get('modelCode')?.reset();
        this.vehicleForm.get('yearCode')?.reset();
        this.years$ = null;
      }
    });

    this.vehicleForm.get('modelCode')?.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          this.years$ = this.getYears(this.vehicleType.value, this.brandCode.value, value);
        };
        this.vehicleForm.get('yearCode')?.reset();
      }
    });

  }

  get vehicleType() {
    return this.vehicleForm.get('vehicleType')!;
  }

  get brandCode() {
    return this.vehicleForm.get('brandCode')!;
  }

  get modelCode() {
    return this.vehicleForm.get('modelCode')!;
  }

  get yearCode() {
    return this.vehicleForm.get('yearCode')!;
  }

  getBrands(type: string) {
    return this.fipeService.getBrands(type).pipe(
      catchError(err => {
        console.log('ERRO *GET BRANDS: ');
        console.log(err);
        return of([]);
      })
    );
  };

  getModels(type: string, brandCode: string) {
    return this.fipeService.getModels(type, brandCode).pipe(
      catchError(err => {
        console.log('ERRO *GET MODELS: ');
        console.log(err);
        return of([]);
      })
    );
  };

  getYears(type: string, brandCode: string, modelCode: string) {
    return this.fipeService.getModelYears(type, brandCode, modelCode).pipe(
      catchError(err => {
        console.log('ERRO *GET MODEL YEARS: ');
        console.log(err);
        return of([]);
      })
    );
  };

  submit() {
    if (this.vehicleForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.vehicleForm.value);
  };

}
