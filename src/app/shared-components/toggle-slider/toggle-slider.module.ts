import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared-components.module';
import { ToggleSliderComponent } from './toggle-slider.component';

@NgModule({
  declarations: [ToggleSliderComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [ToggleSliderComponent],
})
export class ToggleSliderModule { }
