import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared-components.module';
import { WidgetsComponent } from './widgets.component';



@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule, SharedComponentsModule
  ],
  exports: [WidgetsComponent]
})
export class WidgetsModule { }
