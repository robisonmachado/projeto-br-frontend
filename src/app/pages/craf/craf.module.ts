import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrafRoutingModule } from './craf-routing.module';
import { CrafComponent } from './craf.component';


@NgModule({
  declarations: [
    CrafComponent
  ],
  imports: [
    CommonModule,
    CrafRoutingModule
  ]
})
export class CrafModule { }
