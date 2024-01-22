import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [ToastComponent],
})
export class ToastModule {}
