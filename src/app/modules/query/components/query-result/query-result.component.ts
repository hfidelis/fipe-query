import { Component, Input, Output, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { QueryValue } from '../../models/QueryValue';
import { FipeService } from '../../services/fipe.service';
import { Vehicle } from '../../models/Vehicle';
import { Observable } from 'rxjs';
import { catchError, of } from 'rxjs';
import { faClipboardList, faListOl, faGasPump, faCalendarDays, faIndustry, faTags, faL } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.css']
})
export class QueryResultComponent implements OnInit {
  @Input() data!: QueryValue;
  @Output() goBack: EventEmitter<any> = new EventEmitter<any>;

  fadeOut: boolean = false;
  fadeIn: boolean = false;

  vehicleData$!: Observable<Vehicle>;

  userValue!: number;

  faClipboardList: IconDefinition = faClipboardList;
  faListOl: IconDefinition = faListOl;
  faGasPump: IconDefinition = faGasPump;
  faCalendarDays: IconDefinition = faCalendarDays;
  faIndustry: IconDefinition = faIndustry;
  faTags: IconDefinition = faTags;

  constructor(
    private fipeService: FipeService,
  ) {}

  ngOnInit(): void {
    this.fadeIn = true;
    setTimeout(() => {
      this.fadeIn = false;
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if('data' in changes) {
      this.vehicleData$ = this.getInfo(this.data.vehicleType, this.data.brandCode, this.data.modelCode, this.data.yearCode);

      this.userValue = this.data.userValue;
    };
  }

  getInfo(type: string, brandCode: string, modelCode: string, yearCode: string): Observable<Vehicle> {
    return this.fipeService.getModelDetails(type, brandCode, modelCode, yearCode)
    .pipe(
      catchError(err => {
        console.log('ERROR *GET MODEL DETAILS: ')
        console.log(err);
        return of({} as Vehicle);
      })
    )
  }

  back() {

    this.fadeOut = true;

    setTimeout(() => {
      this.goBack.emit()
    }, 600);

  }

}
