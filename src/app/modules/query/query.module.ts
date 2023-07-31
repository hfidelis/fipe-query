import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './pages/query/query.component';



@NgModule({
  declarations: [
    QueryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QueryComponent
  ]
})
export class QueryModule { }
