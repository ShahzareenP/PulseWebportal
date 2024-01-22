import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchTabViewComponent } from './switch-tab-view.component';
import { SharedComponentsModule } from '../shared-components.module';

@NgModule({
  declarations: [SwitchTabViewComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [SwitchTabViewComponent],
})
export class SwitchTabViewModule {}
