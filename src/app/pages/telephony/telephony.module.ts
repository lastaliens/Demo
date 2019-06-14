import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TelephonyRoutingModule, routedComponents } from './telephony-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    TelephonyRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TelephonyModule { }
