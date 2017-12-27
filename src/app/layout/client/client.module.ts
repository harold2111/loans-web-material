import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client.component';

// Material Design Component
import {MaterialModule} from '../../material.module'

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ],
  declarations: [
    ClientComponent
  ]
})
export class ClientModule { }
