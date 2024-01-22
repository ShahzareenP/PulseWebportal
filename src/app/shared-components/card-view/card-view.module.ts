import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared-components.module';
import { CardViewComponent } from './card-view.component';

@NgModule({
  declarations: [CardViewComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [CardViewComponent]
})
export class CardViewModule { }
