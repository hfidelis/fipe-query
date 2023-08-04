import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { QueryComponent } from './pages/query/query.component';


@NgModule({
  declarations: [
    QueryComponent,
    QueryFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    QueryComponent
  ]
})
export class QueryModule { }
