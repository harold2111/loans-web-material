import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client.component';

// Material Design Component
import {MaterialModule} from '../../material.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import { ClientService } from './services/client.service';
import { CreateClientComponent } from './components/create-client/create-client.component';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ClientComponent,
    CreateClientComponent
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
