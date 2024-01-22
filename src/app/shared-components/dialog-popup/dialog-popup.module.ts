import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogPopupComponent } from './dialog-popup.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [DialogPopupComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [DialogPopupComponent],
})
export class DialogPopupModule {}
