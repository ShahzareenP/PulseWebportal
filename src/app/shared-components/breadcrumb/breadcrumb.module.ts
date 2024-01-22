import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
