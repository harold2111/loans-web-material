import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

// Material Design Component
import {MaterialModule} from '../material.module'

@NgModule({
  imports: [
    CommonModule,    
    LayoutRoutingModule,
    MaterialModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
