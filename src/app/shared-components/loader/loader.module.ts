import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
