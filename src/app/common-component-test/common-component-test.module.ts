import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MyContactsComponent } from './my-contacts/my-contacts.component';

@NgModule({
  declarations: [
    MyContactsComponent
  ],
  imports: [
    // CommonModule,
    // SharedComponentsModule,
    // MatTableModule,
    // MatSortModule,
    // MatFormFieldModule,
    // MatInputModule,
    // FormsModule,
    // MatButtonModule,
    SharedComponentsModule,
  ]
})
export class CommonComponentTestModule { }