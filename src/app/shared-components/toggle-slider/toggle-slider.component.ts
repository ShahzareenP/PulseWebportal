import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToggleSliderConfig } from './toggle-slider.model';
// import { ToggleSliderService } from './toggle-slider.service';

@Component({
  selector: 'papp-toggle-slider',
  templateUrl: './toggle-slider.component.html',
  styleUrls: ['./toggle-slider.component.scss'],
})
export class ToggleSliderComponent {
  @Input() toggleConfig!: ToggleSliderConfig;
  @Output() toggleChange = new EventEmitter<ToggleSliderConfig>();

  constructor() {}

  toggleChanged(event: any) {
    this.toggleConfig.defaultToggleValue = event.source.checked;
    this.toggleChange?.emit(this.toggleConfig);
  }
}
