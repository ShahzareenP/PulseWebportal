import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common-component-test/home/home.component';
import { MyContactsComponent } from './common-component-test/my-contacts/my-contacts.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: MyContactsComponent,
    path: "contacts"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
