import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

// Material Design Component
import {MaterialModule} from '../material.module'
//Flex
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,    
    LayoutRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
