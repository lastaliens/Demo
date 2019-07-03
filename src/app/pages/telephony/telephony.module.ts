import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';

import { CallQueueFormComponent } from './call-queue/call-queue-form.component';
import { TelephonyRoutingModule, routedComponents } from './telephony-routing.module';

const COMPONENTS = [
  CallQueueFormComponent,
];

const ENTRY_COMPONENTS = [

  CallQueueFormComponent,
];

const MODULES = [
  ThemeModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
];

@NgModule({
  imports: [
    ...MODULES,
    TelephonyRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ...COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class TelephonyModule { }
