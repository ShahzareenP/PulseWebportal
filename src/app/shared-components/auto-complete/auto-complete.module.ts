import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { AutoCompleteComponent } from './auto-complete.component';

@NgModule({
  declarations: [AutoCompleteComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [AutoCompleteComponent],
})
export class AutoCompleteModule {}
