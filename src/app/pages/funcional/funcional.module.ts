import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionalRoutingModule } from './funcional-routing.module';
import { FuncionalComponent } from './funcional.component';


@NgModule({
  declarations: [
    FuncionalComponent
  ],
  imports: [
    CommonModule,
    FuncionalRoutingModule
  ]
})
export class FuncionalModule { }
