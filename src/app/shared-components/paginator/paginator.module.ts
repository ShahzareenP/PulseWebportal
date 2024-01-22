import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';



@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule, SharedComponentsModule
  ],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
