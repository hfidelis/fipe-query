import { Component } from '@angular/core';

import { QueryValue } from '../../models/QueryValue';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {

  showForm: boolean = true;
  isLoading: boolean = false;
  isData: boolean = false;
  dataValue!: QueryValue;

  constructor() {}

  handleSubmit($event: QueryValue) {

    this.dataValue = $event;
    // Destroy query-form component;
    this.showForm = false;
    // Init form-spinner component;
    this.isLoading = true;

    setTimeout(() => {
      // Destroy form-spinner component;
      this.isLoading = false;
      this.isData = true;
    }, 3500);

  }

  onGoBack() {
    this.isData = false;
    this.showForm = true;
  }
  
}
