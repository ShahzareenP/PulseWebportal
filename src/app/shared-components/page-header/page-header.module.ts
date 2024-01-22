import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
