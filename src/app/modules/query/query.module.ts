import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './pages/query/query.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    QueryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    QueryComponent
  ]
})
export class QueryModule { }
