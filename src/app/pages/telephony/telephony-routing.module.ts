import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelephonyComponent } from './telephony.component';
import { UsersComponent } from './user/users.component';
import { CallQueuesComponent } from './call-queue/call-queues.component';
 
 
const routes: Routes = [{
  path: '',
  component: TelephonyComponent,
  children: [
    {
    path: 'users',
    component: UsersComponent,
    },
    {
      path: 'call-queue',
      component: CallQueuesComponent,
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelephonyRoutingModule { }

export const routedComponents = [
  TelephonyComponent,
  UsersComponent,
  CallQueuesComponent,
];
