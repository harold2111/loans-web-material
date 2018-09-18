import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Material Design Component
import {MaterialModule} from '../../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientCreateEditComponent } from './components/client-create-edit/client-create-edit.component';


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
    ClientCreateEditComponent
  ],
  providers: [
  ]
})
export class ClientModule { }
