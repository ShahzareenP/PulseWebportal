import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFooterComponent } from './page-footer.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [PageFooterComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [PageFooterComponent],
})
export class PageFooterModule {}
