import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatToolbarModule
  ],
  declarations: [
    ClientComponent
  ]
})
export class ClientModule { }
