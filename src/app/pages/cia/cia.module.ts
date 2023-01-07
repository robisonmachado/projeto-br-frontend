import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiaRoutingModule } from './cia-routing.module';
import { CiaComponent } from './cia.component';


@NgModule({
  declarations: [
    CiaComponent
  ],
  imports: [
    CommonModule,
    CiaRoutingModule
  ]
})
export class CiaModule { }
