import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Material Design Component
import {MaterialModule} from '../../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { ClientAddressFormComponent } from './components/client-address-form/client-address-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ClientListComponent,
    ClientFormComponent,
    ClientViewComponent,
    ClientAddressFormComponent
  ],
  providers: [
  ]
})
export class ClientModule { }
