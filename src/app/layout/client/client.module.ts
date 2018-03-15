import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client.component';

// Material Design Component
import {MaterialModule} from '../../material.module'

import {FlexLayoutModule} from '@angular/flex-layout';
import { ClientService } from './services/client.service';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ClientComponent
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
