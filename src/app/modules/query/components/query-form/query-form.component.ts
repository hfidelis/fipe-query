import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faCalendarDays,
  faCaretDown,
  faCarSide,
  faDollarSign,
  faIndustry,
  faMoneyBillTransfer,
  faMotorcycle,
  faTags,
  faTriangleExclamation,
  faTruck,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { FipePattern } from '../../models/FipePattern';
import { QueryValue } from '../../models/QueryValue';
import { FipeService } from '../../services/fipe.service';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {

  @Output() onSubmit: EventEmitter<QueryValue> = new EventEmitter<QueryValue>;

  fadeOut: boolean = false;

  vehicleForm!: FormGroup;

  brands$?: Observable<Array<FipePattern>>;
  models$?: Observable<Array<FipePattern>>;
  years$?: Observable<Array<FipePattern>>;

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
  faMoneyBillTransfer: IconDefinition = faMoneyBillTransfer;
  faDollarSign: IconDefinition = faDollarSign;

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
      yearCode: new FormControl('', [Validators.required]),
      userValue: new FormControl(undefined, [Validators.required, Validators.min(0)])
    });

    this.vehicleType?.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          this.brands$ = this.getBrands(value);
        }
        this.brandCode?.reset();
        this.modelCode?.reset();
        this.yearCode?.reset();
        this.userValue?.reset();
        this.models$ = undefined;
        this.years$ = undefined;
      }
    });

    this.brandCode?.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          this.models$ = this.getModels(this.vehicleType.value, value);
        }
        this.modelCode?.reset();
        this.yearCode?.reset();
        this.userValue?.reset();
        this.years$ = undefined;
      }
    });

    this.modelCode?.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          this.years$ = this.getYears(this.vehicleType.value, this.brandCode.value, value);
        }
        this.yearCode?.reset();
        this.userValue?.reset();
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

  get userValue() {
    return this.vehicleForm.get('userValue')!;
  }

  getBrands(type: string): Observable<Array<FipePattern>> {
    return this.fipeService.getBrands(type);
  };

  getModels(type: string, brandCode: string): Observable<Array<FipePattern>> {
    return this.fipeService.getModels(type, brandCode);
  };

  getYears(type: string, brandCode: string, modelCode: string): Observable<Array<FipePattern>> {
    return this.fipeService.getModelYears(type, brandCode, modelCode);
  };

  submit() {
    if (this.vehicleForm.invalid) {
      return;
    }

    this.fadeOut = true;

    setTimeout(() => {
      this.onSubmit.emit(this.vehicleForm.value);
    }, 600);
  };

}
