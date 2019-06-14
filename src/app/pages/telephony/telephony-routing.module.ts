import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelephonyComponent } from './telephony.component';
import { UsersComponent } from './user/users.component';
import { FieldsComponent } from './field/fields.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: 'users',
    component: UsersComponent,
  }]
},
  {
  path: '',
  component: FieldsComponent,
  children: [{
    path: 'fields',
    component:FieldsComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelephonyRoutingModule { }

export const routedComponents = [
  TelephonyComponent,
  UsersComponent,
  FieldsComponent
];
