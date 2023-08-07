import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormSpinnerComponent } from './components/form-spinner/form-spinner.component';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { QueryResultComponent } from './components/query-result/query-result.component';
import { QueryComponent } from './pages/query/query.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    QueryComponent,
    QueryFormComponent,
    FormSpinnerComponent,
    QueryResultComponent
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
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ]
})

export class QueryModule { }
