import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableSelectorComponent } from './searchable-selector.component';
import { MatAutocompleteModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  declarations: [
    SearchableSelectorComponent
  ],
  exports: [
    SearchableSelectorComponent
  ]

})
export class SearchableSelectorModule { }
